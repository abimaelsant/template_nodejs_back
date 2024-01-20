import type {Config} from 'jest';

const config: Config = {
  bail: true,

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['src/modules/**/useCases/**/*.ts'],

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testMatch: ['**/*.spec.ts'],

};

export default config;
