# SleakOps Documentation

Welcome to SleakOps's documentation repository! This contains the source code for the hosted docs at [https://docs.sleakops.com](https://docs.sleakops.com)

This website is built using [Docusaurus 2](https://docusaurus.io/), see the Docusaurus documentation [here](https://docusaurus.io/docs). 

### Installation

```
$ docker compose run --rm doc yarn
```

### Local Development

```
$ docker compose up
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ docker compose run --rm doc yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Run the static build

```
$ docker compose run --rm doc yarn run serve
```