import type { CodegenConfig } from '@graphql-codegen/cli';

const SERVER_URL = process.env.VITE_SERVER_URL ?? 'http://localhost:8080';

const config: CodegenConfig = {
  schema: {
    [`${SERVER_URL}/graphql`]: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  },
  documents: 'src/**/*.graphql',
  generates: {
    'src/lib/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  watch: true,
  verbose: true,
};

export default config;
