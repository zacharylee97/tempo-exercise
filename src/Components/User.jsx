import React from 'react';
import axios from 'axios';

export default class User extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios.get(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/${this.props.id}`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  render() {
    const {id, name, username} = this.state.user;
    return (
      <div>
        <p>User {id}: {name}</p>
        <p>Username: {username}</p>
      </div>
    )
  }
}
