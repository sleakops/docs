# ELASTICACHE-AWS

For caching solutions, Sleakoks supports as a [dependency](./dependency.md) ElastiCache for Redis. You can read more about its benefits in this [link](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html).

When you create this dependency, you only need to provide the parameters listed below:

| Name          | Description                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| EngineVersion | Redis engine version                                                                                                           |
| NodeType      | The node type [link](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html#CacheNodes.SelectSize) |
| NumCacheNodes | The number of nodes in the caching cluster                                                                                     |
| Port          | If you don't use the default port 6379, the used port goes here.                                                               |

The subnet group needed will be within your environment [VPC](vpc.md) according with our [proposed architecture](architecture.md).

Additional parameters are the default for this resource, in AWS default.redis6.2 .

<!--
    def get_aws_elasticache_program(self, dependency: Dependency):
        subnet_group = aws.rds.SubnetGroup(
            self.generate_resource_name(dependency.name, dependency),
            subnet_ids=[
                n["id"]
                for n in self.get_network_output()["public_subnet_ids"]
                + self.get_network_output()["private_subnet_ids"]
            ],
            tags={
                "Name": f"DBSubnetGroup-{self.VPC_ID}",
            },
        )
        aws.elasticache.Cluster(
            self.generate_resource_name(dependency.name, dependency),
            engine="redis",
            engine_version="6.2",
            node_type="cache.t2.micro",
            num_cache_nodes=1,
            subnet_group_name=subnet_group.name,
            parameter_group_name="default.redis6.2",
            port=6379,
        ) -->
