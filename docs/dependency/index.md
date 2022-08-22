# Dependencies

In Sleakops we call dependencies to the different pieces of underlying infrastructure your apps need to run in the cloud, such as relational databases, storage services or caches. Some dependencies are linked to provider-specific services and others are chart-based Kubernetes packages.

Our dependencies model has the following properties: a name, provider (currently only AWS), an environment, dependency type and a configuration, which is specific to the dependency type.

Some examples are:

- AWS managed RDS

- AWS managed Redis with Elasticache

- AWS s3 buckets

- Redis instances in our cluster

We provide a specific page for each dependency type.

- [Postgresql-aws](./postgresql-aws.mdx)

- [MySQL-aws](./mysql-aws.mdx)

- [Elasticache-aws](./elasticache-aws.mdx)

- [Postgresql-serverless](./postgresql-serverless.md)

- [Bucket-aws](./s3bucket-aws.mdx)

- [sqs-aws](./sqs-aws.mdx)

### Cloud resources

Chart-based Kubernetes packages create . Provider-specific services create .
