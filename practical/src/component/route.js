// import react from 'react';
import {BrowserRouter as Router, Routes ,Route,Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import User from './user';

export default function Rout(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path ="/"><Home  /></Route>
            <Route exact path ="/about"><About  /></Route>
            <Route exact path ="/users"><User  /></Route>
          </Routes>
        </div>
      </Router>
    );
}