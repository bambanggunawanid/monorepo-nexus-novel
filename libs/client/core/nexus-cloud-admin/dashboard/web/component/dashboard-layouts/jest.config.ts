/* eslint-disable */
export default {
    displayName:
        'client-core-nexus-cloud-admin-dashboard-web-component-dashboard-layouts',
    preset: '../../../../../../../../jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
        '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../../../../../coverage/libs/client/core/nexus-cloud-admin/dashboard/web/component/dashboard-layouts',
};
