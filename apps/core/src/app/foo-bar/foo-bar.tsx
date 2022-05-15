import { useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooBarProps {}

const StyledFooBar = styled.div`
  color: crimson
`;

export function FooBar(props: FooBarProps) {
  const [state, setState] = useState(0)
  return (
    <StyledFooBar>
      <h1>Welcome to FooBar!</h1>
      <p>State is {state}</p>
    </StyledFooBar>
  );
}

export default FooBar;
