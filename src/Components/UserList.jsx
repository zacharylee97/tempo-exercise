import React from 'react';
import axios from 'axios';
import User from './User'

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => <li>{user.name}</li>)}
      </ul>
    )
  }
}
