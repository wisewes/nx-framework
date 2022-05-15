import { render } from '@testing-library/react';

import FooBar from './foo-bar';

describe('FooBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooBar />);
    expect(baseElement).toBeTruthy();
  });
});
