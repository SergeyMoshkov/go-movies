import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './components/Home';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Contacts from './components/Contacts';
// import { render } from 'react-dom';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Программирование для каждого</h1>
          <hr className="mb-3"></hr>
          <div className="row">
            <div className="col-md-2">
              <nav>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/admin">Admin</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Movie() {
  let { id } = useParams();
  return (
    <h2>Movie id {id}</h2>
  )
}
