import { render } from '@testing-library/react';

import Checkbox from './CheckboxDefault';

describe('Checkbox', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox />);
    expect(baseElement).toBeTruthy();
  });

});
