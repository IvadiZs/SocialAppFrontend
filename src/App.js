import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';

import { MainPage } from "./Elements/MainPage";
import { ForumPostList } from "./Elements/ForumPostList";
import { MediaPostList } from "./Elements/MediaPostList";
import { LinkPostList } from "./Elements/LinkPostList";
import { CreatePost } from "./Elements/CreatePost";


function App() {
  return (
    <Router>
      <div id = "main">
        {/*Az oldal tetején megjelenő navigációs sáv
           A sávon 5 helyre van lehetőségünk naivgálni:
           Home page, Fórum, Média, Linkek, Posztolás*/}

        <nav className="navbar navbar-expand-lg navbar-light" 
             style = {{ 
              width: "100%",
              backgroundColor: "#2f74ba"
              }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link navbar-brand">
                <span>Oldal neve</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/media`} className="nav-link">
                <span>Média tartalom</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/forum`} className="nav-link">
                <span>Fórum posztok</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/links`} className="nav-link">
                <span>Link tartalom</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/publish`} className="nav-link">
                <span>Poszt létrehozása</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/*" element={<MainPage />}/>
        <Route path="/forum" element={<ForumPostList />} />
        <Route path="/media" element={<MediaPostList />} />
        <Route path="/links" element={<LinkPostList />} />
        <Route path="/publish" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}


export default App;