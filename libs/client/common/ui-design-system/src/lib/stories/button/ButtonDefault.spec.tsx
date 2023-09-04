import { render } from '@testing-library/react';

import ButtonDefault from './ButtonDefault';

describe('ButtonDefault', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ButtonDefault />);
        expect(baseElement).toBeTruthy();
    });
});
