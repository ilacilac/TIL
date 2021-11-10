import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/ming">ming</Link>
        </li>
        <li>
          <Link to="/profiles/angdoong">angdoong</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":username" element={<Profile />} />
        <Route path="/" element={<div>사용자를 선택해주세요.</div>} />
      </Routes>
    </div>
  )
}

export default Profiles;
