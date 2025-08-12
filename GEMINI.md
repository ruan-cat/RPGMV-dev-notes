# Project Overview

This is a monorepo project for managing multiple documentation sites. It uses pnpm for package management, turbo for build orchestration, and vitepress for generating the documentation sites.

The project is structured as a pnpm workspace, with the documentation packages located in the `docs` directory. Each package in the `docs` directory is a separate vitepress site.

The main documentation sites are:
- `@ruan-cat-docs/docs-01-star`: Public documents for 01-star.
- `@ruan-cat-docs/rpgmv-dev-notes`: Development notes for RPG Maker MV.
- `@ruan-cat-docs/notes`: Personal notes of Ruan Cat.

# Building and Running

## Building all sites

To build all the documentation sites, run the following command from the root of the project:

```bash
pnpm build
```

This will use turbo to build each site in parallel.

## Running a single site locally

To run a single documentation site in development mode, navigate to the package directory and run the `docs:dev` script. For example, to run the `ruan-cat-notes` site:

```bash
cd docs/ruan-cat-notes
pnpm docs:dev
```

This will start a local development server for the site.

# Development Conventions

- **Package Management**: This project uses pnpm for managing dependencies. Please use pnpm to install, add, or remove packages.
- **Build System**: This project uses turbo to manage the build process. The build tasks are defined in the `turbo.json` file.
- **Documentation**: The documentation sites are built with vitepress. The configuration for each site is located in the `.vitepress` directory within each package.
- **Git**: The project has several git-related scripts in the root `package.json` for rebasing branches.
