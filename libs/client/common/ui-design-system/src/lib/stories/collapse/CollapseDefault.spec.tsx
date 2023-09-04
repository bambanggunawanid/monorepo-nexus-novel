import { render } from '@testing-library/react';

import Collapse from './CollapseDefault';

describe('Collapse', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Collapse />);
    expect(baseElement).toBeTruthy();
  });

});
