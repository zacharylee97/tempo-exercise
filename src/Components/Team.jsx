import React from 'react';
import axios from 'axios';

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
        <p>Team {id}: {name}</p>
        <p>Lead: {lead}</p>
        <div>Members:
          {this.state.members.map(member =>
            <p key={member}>{member}</p>
          )}
        </div>
      </div>
    )
  }
}
