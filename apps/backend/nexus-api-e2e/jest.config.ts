/* eslint-disable */
export default {
  displayName: 'nexus-api-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '/src/support/global-setup.ts',
  globalTeardown: '/src/support/global-teardown.ts',
  setupFiles: ['/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/backend/nexus-api',
};
