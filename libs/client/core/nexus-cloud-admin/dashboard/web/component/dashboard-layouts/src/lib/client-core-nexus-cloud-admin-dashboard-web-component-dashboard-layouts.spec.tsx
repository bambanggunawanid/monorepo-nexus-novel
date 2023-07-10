import { render } from '@testing-library/react';

import ClientCoreNexusCloudAdminDashboardWebComponentDashboardLayouts from './client-core-nexus-cloud-admin-dashboard-web-component-dashboard-layouts';

describe('ClientCoreNexusCloudAdminDashboardWebComponentDashboardLayouts', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ClientCoreNexusCloudAdminDashboardWebComponentDashboardLayouts />
        );
        expect(baseElement).toBeTruthy();
    });
});
