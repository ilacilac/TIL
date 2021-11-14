import React, { useCallback, useState } from 'react';
import { Route, Routes } from '../node_modules/react-router/index';
import NewsPage from './pages/NewPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage category="all" />} />
      <Route path="business" element={<NewsPage category="business" />} />
      <Route
        path="entertainment"
        element={<NewsPage category="entertainment" />}
      />
      <Route path="health" element={<NewsPage category="health" />} />
      <Route path="science" element={<NewsPage category="science" />} />
      <Route path="sports" element={<NewsPage category="sports" />} />
      <Route path="technology" element={<NewsPage category="technology" />} />
    </Routes>
  );
};

export default App;
