<p align="center">
    <img src=".github/assets/logo.svg" alt="@privateaim/eslint-config" width="96" height="96">
</p>

<h1 align="center">@privateaim/eslint-config</h1>

<p align="center">
    <b>Shared ESLint flat config for PrivateAIM projects.</b>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@privateaim/eslint-config"><img src="https://img.shields.io/npm/v/@privateaim/eslint-config" alt="npm version"></a>
    <a href="https://github.com/PrivateAIM/eslint-config/actions/workflows/main.yml"><img src="https://github.com/PrivateAIM/eslint-config/actions/workflows/main.yml/badge.svg" alt="CI"></a>
    <a href="https://github.com/PrivateAIM/eslint-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/PrivateAIM/eslint-config" alt="license"></a>
</p>

A small PrivateAIM-specific entry point around [`@tada5hi/eslint-config`](https://github.com/tada5hi/javascript/tree/master/packages/eslint-config). It preserves the base config's options and user overrides while leaving room for organization-specific defaults later.

## Installation

```bash
npm install --save-dev @privateaim/eslint-config eslint
```

For TypeScript projects, also install `typescript-eslint` and `typescript`. For Vue projects, install `eslint-plugin-vue`.

## Usage

Create an `eslint.config.js` or `eslint.config.mjs`:

```js
import eslintConfig from '@privateaim/eslint-config';

export default [
    ...await eslintConfig({
        typescript: true,
    }),
    { ignores: ['dist/**'] },
];
```

The factory accepts the same options as `@tada5hi/eslint-config`:

```js
import eslintConfig from '@privateaim/eslint-config';

export default await eslintConfig({
    typescript: { project: true },
    vue: true,
}, {
    rules: {
        'no-console': 'off',
    },
});
```

## API

```ts
import type { Linter } from 'eslint';
import type { FactoryOptions } from '@privateaim/eslint-config';

export default function eslintConfig(
    options?: FactoryOptions,
    ...userConfigs: Linter.Config[]
): Promise<Linter.Config[]>;
```

`FactoryOptions` supports `typescript` and `vue` as booleans or option objects. User configs are appended after the shared rules, so they can override them.

## Contributing

Before starting work on a pull request, review the [contributing guide](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md).

## License

Published under the [Apache-2.0 License](./LICENSE).
