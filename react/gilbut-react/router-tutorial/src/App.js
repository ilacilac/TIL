import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
// import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        {/* <li>
          <Link to="/profile/ming">ming</Link>
        </li>
        <li>
          <Link to="/profile/angdoong">angdoong</Link>
        </li> */}
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
        {/* <Route path="/profiles/*" element={<Profiles />} /> */}

        {/* <Route path="profiles/*" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route> */}

        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div >
  );
};

export default App;
