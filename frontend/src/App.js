import React from 'react';

import { Router } from 'react-router-dom';
import './configs/ReactotronConfig';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { useDarkMode } from './themes/useDarkMode';
import { lightTheme, darkTheme } from './themes/theme';

// import Header from './components/Header'

import Routes from './routes';
import history from './services/history';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        {/* <Header theme={theme} toggleTheme={toggleTheme}/> */}
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
