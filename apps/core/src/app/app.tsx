import styled from 'styled-components';
import FooBar from './foo-bar/foo-bar';

const StyledApp = styled.main``;

export function App() {
  return (
    <StyledApp>
      <FooBar />
    </StyledApp>
  );
}

export default App;
