import { describe, expect, it } from 'vitest';
import eslintConfig from '../../src/index.ts';

describe('src/index.ts', () => {
    it('delegates to the base ESLint config', async () => {
        const result = await eslintConfig();

        expect(result.length).toBeGreaterThan(0);
    });
});
