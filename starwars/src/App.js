import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile.js";
import ProfilesList from "./components/ProfilesList/ProfilesList.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h1 className="Header">React Wars</h1>
            <div className="main_content">
              <Route exact path="/" component={ProfilesList} />
              <Route path="/people/:id" component={Profile} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
