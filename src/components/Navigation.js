import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Link className="links" to="/Home">
            Home
        </Link>
        </div>
        <div>
        <Link className="links" to="/About">
            about
          </Link>
        </div>
        <div>
          <Link className="links" to="/Contact">
            contact
          </Link>
        </div>
      </div>
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Contact} /> */}
    </div>
  );
};

export default Navigation;
