import React from 'react';
/* Responsável por trazer o theme do styled-components */
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
