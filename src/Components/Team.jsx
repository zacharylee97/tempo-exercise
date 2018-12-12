import React from 'react';
import axios from 'axios';
import User from './User.jsx'

export default class Team extends React.Component {
  state = {
    team: {}
  }

  componentDidMount() {
    axios.get(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${this.props.id}`)
      .then(res => {
        const team = res.data;
        this.setState({ team });
      })
  }

  render() {
    const {id, name, lead, members} = this.state.team;
    return (
      <div>
        <p>Team {id}: {name}</p>
        <p>Lead: {lead}</p>
        <User id={lead}/>
        <p>Members: {members}</p>
      </div>
    )
  }
}
