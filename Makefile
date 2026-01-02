SHELL := /bin/bash 


install:  ## Install Docusaurus
	docker compose run --rm doc yarn

run:  ## Run Docusaurus
	docker compose up -d

logs: ## View Docusaurus logs
	docker compose logs -f doc

run-es: ## Run Docusaurus in ESP version
	docker compose run --rm -p 4000:4000 doc yarn run startes