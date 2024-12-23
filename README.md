# NextJS + Clearn Architecture + Turborepo

Clearn Architecture를 도입한 NextJS 서비스를 Turborepo로 구성하였습니다.

## What's inside?

- [Turborepo](https://turbo.build/repo/docs)
- [NextJS](https://nextjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React hook form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Storybook](https://storybook.js.org/)
- [Tailwindcss](https://tailwindcss.com/)

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
