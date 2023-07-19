// pages/index.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Lists from './Lists/Lists';
import GameBody from './Lists/Games/GameBody';

const Pages: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/lists/:listId/games" element={<GameBody />} />
      </Routes>
    </Router>
  );
};

export default Pages;
