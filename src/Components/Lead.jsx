import React from 'react';
import axios from 'axios';

export default class Lead extends React.Component {
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

  findUser() {
    const user = this.state.users.find(user => user.id === this.props.id);
    if (user) {
      console.log(user)
      return (<p>{user.name} ({user.username})</p>)
    }
  }

  render() {
    return (
      <div>
        {this.findUser()}
      </div>
    )
  }
}
