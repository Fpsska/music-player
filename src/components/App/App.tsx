import React from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Layout from '../Common/Layout';
import HomePage from '../Pages/Home/HomePage';
import PlayListPage from '../Pages/Playlist/PlayListPage';
import PlayerPage from '../Pages/Player/PlayerPage';
import FilterPage from '../Pages/Search/SearchPage';
import '../../assets/scss/style.scss';
import '../../assets/scss/media.scss';
import '../../../node_modules/swiper/swiper.scss';
import './App.css';
import { RootState } from '../../app/store';

// /. imports

const App: React.FC = () => {
  const { isLightTheme } = useSelector((state: RootState) => state.burgerSlice);

  return (
    <div className={isLightTheme ? 'App light' : 'App'}>
      <Routes>
        <Route path="/Music-player" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="playlist" element={<PlayListPage />} />
          <Route path="player" element={<PlayerPage />} />
          <Route path="search" element={<FilterPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;