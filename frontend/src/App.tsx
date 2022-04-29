import React, { Suspense, useMemo, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';
import i18n from './app/i18n/i18n';
import { StartPage } from './app/pages/StartPage';
import { ColorModeProvider, setModeOfLocalStorage } from './app/mui-styles/darkmodeProvider';
import { createMainTheme } from './app/mui-styles/muiStyles';
import { MainBackground } from './app/components/common/MainBackground';

const queryClient = new QueryClient();

function LoadingScreen() {
  return (
    <div>
      loading...
    </div>
  );
}

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setModeOfLocalStorage(mode === 'light' ? 'dark' : 'light');
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const theme = useMemo(
    () => createMainTheme(mode),
    [mode],
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <I18nextProvider i18n={i18n}>
            <ColorModeProvider value={colorMode}>
              <QueryClientProvider client={queryClient}>
                <div className="App">
                  <MainBackground>
                    <Routes>
                      <Route path="/" element={<StartPage />} />
                    </Routes>
                  </MainBackground>
                </div>
              </QueryClientProvider>
            </ColorModeProvider>
          </I18nextProvider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
