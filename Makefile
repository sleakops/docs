SHELL := /bin/bash 


install:  ## Install Docusaurus
	docker compose run --rm docusaurus yarn

run:  ## Run Docusaurus
	docker compose up

run-es: ## Run Docusaurus in ESP version
	docker compose run --rm -p 4000:4000 doc yarn run startes