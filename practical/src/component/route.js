import {BrowserRouter as Router, Routes ,Route,Link } from 'react-router-dom';

import Home from './home';
import About from './about';
// import Contact from './contact';
import User from "./user";

function Rout() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <Routes>
         <Route exact path='/home' element={< Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/user" element={<User/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Rout;