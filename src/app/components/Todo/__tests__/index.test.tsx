import * as React from 'react';
import { render } from '@testing-library/react';

import { Todo } from '..';

describe('<Todo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Todo />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
