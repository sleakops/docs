# PostgreSQL-AWS

For database solutions, Sleakops supports as a [dependency](./index.md) AWS-managed Postgresql RDS, with the benefits of cloud-managed RDS like scalability, backups, software patchings. You can read more about those benefits in this [link](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.RDS).

## Parameters

When you create this dependency, you only need to provide the parameters listed below:

| Name             | Description                                                                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dbname           | The database name                                                                                                                                          |
| dbInstanceClass  | The EC2 instance type and size [link](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#Concepts.DBInstanceClass.Types) |
| dbStorage        | The amount of storage for the instance                                                                                                                     |
| dbEngineVersion  | Postgresql engine version, currently only 14.2                                                                                                             |
| dbMasterUsername | Master username                                                                                                                                            |
| dbMasterPassword | Master password                                                                                                                                            |

The subnet group needed will be within your environment VPC according with our [proposed architecture](/docs/provider/aws.mdx).

The additional parameter_group_name is the default for the engine version (default.postgres14)

<!--
        persistence_db_group = aws.rds.SubnetGroup(
            f"db_subnet_group-{self.VPC_ID}",
            subnet_ids=[
                n["id"] for n in self.get_network_output()["persistence_subnet_ids"]
            ],
            tags={
                "Name": f"DBSubnetGroup-{self.VPC_ID}",
            },
        )
        dbname = self.CONFIG.get("dbName")
        if dbname == "database":
            dbname = f"{self.NAME}-{dbname}"
        aws.rds.Instance(
            self.NAME,
            instance_class=self.CONFIG.get("dbInstanceClass"),
            allocated_storage=self.CONFIG.get("dbStorage"),
            engine_version=self.CONFIG.get("dbEngineVersion"),
            parameter_group_name="default.postgres14",
            db_name=dbname,
            password=self.CONFIG.get("dbMasterPassword"),
            username=self.CONFIG.get("dbMasterUsername"),
            skip_final_snapshot=True,
            engine="postgres",
            db_subnet_group_name=persistence_db_group.name,
        ) -->
