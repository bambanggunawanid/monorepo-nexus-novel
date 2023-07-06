/* eslint-disable */
export default {
    displayName: 'api-payment-payment-admin-pay-hub-payment-info',
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
        '../../../../../../coverage/libs/api/payment/payment-admin/pay-hub/payment-info',
};
