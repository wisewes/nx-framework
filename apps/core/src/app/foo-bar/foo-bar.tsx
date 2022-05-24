import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

/* eslint-disable-next-line */
export interface FooBarProps {}

const StyledFooBar = styled.div`
  display: grid;

  .section {
    border: 1px solid crimson;
    padding: 0.5em;
  }

  details {
    border: 2px solid crimson;
    padding: 0.5em;
    margin: 1em;
  }

  summary {
    font-weight: 800;
    color: deepskyblue;

    &::marker {
      color: green;

    }
  }

`;

const FooBar: React.FC<FooBarProps> = (props) => {
  const [state, setState] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date())
    }, 1000)
  }, [now])

  return (
    <StyledFooBar>
      <time>{format(now, 'MM/dd/yyyy hh:mm:ss')}</time>
      <time dateTime={format(now, 'hh:mm')}>here</time>
      <details>
        <summary>What is this?</summary>
        <p>This is a so and so.</p>
      </details>
      <details>
        <summary>What is this two?</summary>
        <p>This is a so and so two.</p>
      </details>
      <details>
        <summary>What is this three?</summary>
        <p>This is a so and so three.</p>
      </details>
      <p><dfn title="RISC">RISC-based</dfn> stands for reduced instruction set computer.</p>
      <p>this is <cite>something here</cite></p>
      <form>
        <label>Value</label>
        <input type="text" name="value" />
        <label>encrypt</label>
        <keygen name="key" />
        <input type="button" value="Submit" />
      </form>
    </StyledFooBar>
  );
};

export default FooBar;
