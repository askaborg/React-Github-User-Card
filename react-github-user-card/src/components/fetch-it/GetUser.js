import React from 'react'

import { DisplayUser } from '../display-it'

class GetUser extends React.Component {
    constructor() {
      super()
      this.state = { user:{} }
    }

    componentDidMount() {
    fetch("https://api.github.com/users/askaborg")
        .then(response => response.json())
        .then(userProfile => this.setState({ ...this.state, user: userProfile }))
        .catch(err => console.error(err))
    }
    
    render() {
      return (
        <div>
          <DisplayUser profile={this.state.user} />
        </div>
      )
    }
  }
  
  export default GetUser