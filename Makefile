SHELL := /bin/bash

# ==========================================
# Development Commands
# ==========================================

install: ## Install dependencies
	docker compose run --rm doc yarn

run: ## Run Docusaurus in development mode (English)
	docker compose up

run-es: ## Run Docusaurus in development mode (Spanish)
	docker compose run --rm -p 4000:4000 doc yarn run startes

# ==========================================
# Production Build Commands
# ==========================================

build: ## Build for production (all locales)
	docker compose run --rm doc yarn run build

build-en: ## Build for production (English only)
	docker compose run --rm -e DOCUSAURUS_DEFAULT_LOCALE=en doc yarn run build

build-es: ## Build for production (Spanish only)
	docker compose run --rm -e DOCUSAURUS_DEFAULT_LOCALE=es doc yarn run build

serve: ## Serve production build locally (Search & Multilanguage work here)
	docker compose run --rm -p 4000:4000 doc yarn run serve

# ==========================================
# CMS Commands
# ==========================================

collections: ## Regenerate Sveltia CMS config.yml from folder structure
	python3 generate_cms_config.py

# ==========================================
# Utility Commands
# ==========================================

clear: ## Clear Docusaurus cache
	docker compose run --rm doc yarn run clear

translations: ## Generate translation files
	docker compose run --rm doc yarn run write-translations

# ==========================================
# Help
# ==========================================

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: install run run-es build build-en build-es serve collections clear translations help
.DEFAULT_GOAL := help