SHELL := /bin/bash 


install:  ## Install Docusaurus
	docker compose run --rm docusaurus yarn

run:  ## Run Docusaurus
	docker compose up