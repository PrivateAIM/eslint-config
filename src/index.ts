import type { Linter } from 'eslint';
import eslintConfig from '@tada5hi/eslint-config';
import type { FactoryOptions } from './types.ts';

export type {
    FactoryOptions,
    TypeScriptOptions,
    UserConfig,
    VueOptions,
} from './types.ts';

export default function privateAimEslintConfig(
    options: FactoryOptions = {},
    ...userConfigs: Linter.Config[]
): Promise<Linter.Config[]> {
    return eslintConfig(options, ...userConfigs);
}
