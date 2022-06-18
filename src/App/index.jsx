import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DataProvider } from './../hooks/DataContext';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import theme from '../styles/theme';
import StyleResets from '../styles/resets';

import Home from '../pages/Home';
import TimelinePage from '../pages/TimelinePage';
import UserPage from '../pages/UserPage';
import HashtagPage from '../pages/HashtagPage';
import MainPage from '../pages/MainPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <BrowserRouter>
          <StyleResets />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Route>
            <Route element={<MainPage />}>
              <Route path='/timeline' element={<TimelinePage />} />
              <Route path='/user/:userId' element={<UserPage />} />
              <Route path='/hashtag/:hashtag' element={<HashtagPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}
