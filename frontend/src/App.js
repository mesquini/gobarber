import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import './configs/ReactotronConfig';
import { store, persistor } from './store';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={themeMode}>
            {/* <Header theme={theme} toggleTheme={toggleTheme}/> */}
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
