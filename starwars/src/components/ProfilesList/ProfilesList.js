import React from "react";
import { NavLink } from "react-router-dom";

class ProfilesList extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <ul className="profiles">
        {this.state.starwarsChars.map(profile => {
          return (
            <NavLink to={`/character/${profile.name}`}>
              <li>{profile.name}</li>
            </NavLink>
          );
        })}
      </ul>
    );
  }
}

export default ProfilesList;
