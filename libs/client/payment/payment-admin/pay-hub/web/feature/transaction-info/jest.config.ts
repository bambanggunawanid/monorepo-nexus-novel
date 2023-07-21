/* eslint-disable */
export default {
    displayName:
        'client-payment-payment-admin-pay-hub-web-feature-transaction-info',
    preset: '../../../../../../../../jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
        '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../../../../../coverage/libs/client/payment/payment-admin/pay-hub/web/feature/transaction-info',
};
