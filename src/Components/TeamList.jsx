import React from 'react';
import axios from 'axios';
import Team from './Team.jsx'

export default class TeamList extends React.Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios.get('http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/')
      .then(res => {
        const teams = res.data;
        this.setState({ teams });
      })
  }

  render() {
    return (
      <div>
        {this.state.teams.map(team =>
          <Team key={team.id} id={team.id} />
        )}
      </div>
    )
  }
}
