# NextJS + Clearn Architecture + Turborepo

I set up a NextJS project structured with Clean Architecture principles, using Turborepo as the build system.

## What's inside?

This includes the following packages/apps:

### Apps and Packages

- `docs`: UI component guide [Storybook](https://storybook.js.org/docs) app
- `web`: [NextJS](https://nextjs.org/) web app
- `@repo/core`: `utils` or `libraries`
- `@repo/domain`: `clean architecture` based sources
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwindcss-config`: `tailwindcss` base configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
turbo build
```

### Develop

To develop all apps and packages, run the following command:

```
turbo dev
```
