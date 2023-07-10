/* eslint-disable */
export default {
    displayName: 'api-core-nexus-admin-account-nexus-account',
    preset: '../../../../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory:
        '../../../../../../coverage/libs/api/core/nexus-admin/account/nexus-account',
};
