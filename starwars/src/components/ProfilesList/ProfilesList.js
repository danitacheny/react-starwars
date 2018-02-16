import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class ProfilesList extends React.Component {
  state = {
    starwarsChars: [],
  };

  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        this.setState({ starwarsChars: response.data.results });
      })
      .catch(error => {
        console.log("there was an error:", error);
      });
  }

  render() {
    return (
      <ul className="profiles">
        {this.state.starwarsChars.map((profile, idx) => {
          return (
            <NavLink key={idx + 1} to={`/people/${idx + 1}`}>
              <li>{profile.name}</li>
            </NavLink>
          );
        })}
      </ul>
    );
  }
}

export default ProfilesList;
