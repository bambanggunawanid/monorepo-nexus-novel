import { render } from '@testing-library/react';

import ClientPaymentPaymentAdminPayHubWebFeatureTransactionInfo from './client-payment-payment-admin-pay-hub-web-feature-transaction-info';

describe('ClientPaymentPaymentAdminPayHubWebFeatureTransactionInfo', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ClientPaymentPaymentAdminPayHubWebFeatureTransactionInfo />
        );
        expect(baseElement).toBeTruthy();
    });
});
