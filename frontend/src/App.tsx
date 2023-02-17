import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { GameListPage } from './pages/GameListPage';
import i18n from './i18n/i18n';

function LoadingScreen() {
  return (
    <div>
      loading...
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <I18nextProvider i18n={i18n}>
          <div className="bg-zinc-800 h-screen w-full text-white">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gamelist" element={<GameListPage />} />
            </Routes>
          </div>
        </I18nextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
