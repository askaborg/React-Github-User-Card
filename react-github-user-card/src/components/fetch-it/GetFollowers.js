import React from 'react'

import { DisplayFollowers } from '../display-it'

class GetFollowers extends React.Component {
    constructor() {
      super()
      this.state = { followers:{} }
    }

    componentDidMount() {
    fetch("https://api.github.com/users/askaborg/followers")
        .then(response => response.json())
        .then(followed => this.setState({ ...this.state, followers: followed }))
        .catch(err => console.error(err))
    }
    
    render() {
        const followedBy = Object.values(this.state.followers)
        const gotFollowers = followedBy.length > 0 ? true : false

        if (gotFollowers) {
            return (
                <div>
                    <p>FOLLOWED BY</p>
                    { followedBy.map((followed, index) => 
                        <DisplayFollowers followed={followed} index={index} />
                    )}
                </div>
            )
        }
        else return <></>
    }
  }
  
  export default GetFollowers