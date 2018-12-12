import React from 'react';
import axios from 'axios';
import User from './User.jsx';

export default class Team extends React.Component {
  state = {
    team: {},
    members: []
  }

  componentDidMount() {
    axios.get(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${this.props.id}`)
      .then(res => {
        const team = res.data;
        this.setState({
          team: team,
          members: team.members
        });
      })
  }

  render() {
    const {id, name, lead} = this.state.team;
    return (
      <div>
        <h3>Team {id}: {name}</h3>
        <div className="lead">
          <h3>Lead:</h3>
          <User id={lead} />
        </div>
        <div className="members">
          <h3>Members:</h3>
          {this.state.members.map(member =>
            <User key={member} id={member} />
          )}
        </div>
      </div>
    )
  }
}
