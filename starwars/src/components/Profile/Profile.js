import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Profile.css";

class Profile extends React.Component {
  state = {
    characterInfo: [],
  }

  componentDidMount() {
    const location = this.props.match.params.id;
    axios
    .get(`https://swapi.co/api/people/${location}/`)
    .then(response => {
      this.setState({ characterInfo: response.data })
    })
    .catch(error => console.log('there was an error:', error))
      
  }
  
  render() {
    return (
      <li className="profile">
        <div>Name: {this.state.characterInfo.name}</div>
        <div>Birth Year: {this.state.characterInfo.birth_year}</div>
        <div>Gender: {this.state.characterInfo.gender}</div>
        <div>Height: {this.state.characterInfo.height}</div>
        <div>Mass: {this.state.characterInfo.mass}</div>
        <div>Skin: {this.state.characterInfo.skin_color}</div>
        <div>Hair: {this.state.characterInfo.hair_color}</div>
        <div>Eye Color: {this.state.characterInfo.eye_color}</div>
        <Link to="/">Back to List</Link>
      </li>
    );
  }
}

export default Profile;
