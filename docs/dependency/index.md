# Dependencies

Inside Sleakops we call dependencies to the different pieces of underlying infrastructure your apps need to run in the cloud, such as, relational databases, storage services or caches. Some dependencies are linked to provider-specific services and others are chart-based kubernetes packages.

Our dependencies model has the following properties: a name, provider (currently only AWS), an enviroment, dependency type and a configuration, which is specific to the dependency type.

Some examples are:

- AWS managed RDS

- AWS managed Redis with Elasticache

- AWS s3 buckets

- Redis instances in our cluster

We provide a specific page for each dependency type.

- [Postgresql-aws](./postgresql-aws.md)

- [MySQL-aws](./mysql-aws.mdx)

- [Elasticache-aws](./elasticache-aws.md)

- [Postgresql-serverless](./postgresql-serverless.md)

- [Bucket-aws](./bucket-aws.md)

- [sqs-aws](./sqs-aws.mdx)

<!-- # Integracion de dependencias -->

<!-- ## Intro

Adentro de Sleakops llamamos dependencias a los distintas piezas de infraestructura que nuestros servicios necesitan para funcionar, tales como bases de datos, caches o servicios de almacenamiento. Algunas dependencias estan ligadas a servicios especificos de cloud-providers, y otras son implementaciones para clusters.

El modelo de una dependencia tiene un nombre, un provider (actualmente solo aws), un environment, un tipo de dependencia y una configuracion, que tiene distintos campos de acuerdo al tipo de dependencia.

Algunos ejemplos de dependencias pueden ser:

- Postgresql-aws que es un servicio managed RDS en aws.

- Elasticache-aws que es un servicio managed de cache en aws.

- Redis-serverless que es un redis corriendo en un cluster

- Bucket-aws que es un servicio de storage.

## Flujo

El flujo de deployment de una dependecia inicia cuando el backend recibe una peticion POST en /api/dependency. El recurso se crea en la base de datos y se lanza un worker de celery con los datos para realizar la tarea, actualizando el estado del recurso a "creating". El worker toma el modulo correspondiente de crm/modules y corre el pulumi_program correspondiente.

El trabajo del modulo de dependencias a nivel de pulumi puede clasificarse en uno de dos tipos de acuerdo al modulo de python que utilizan, por un lado tenemos los recursos manejados por kubernetes (que utilizan pulumi_kubernetes), y por el otro los manejados por un provider (por ejemplo pulumi_aws). -->
