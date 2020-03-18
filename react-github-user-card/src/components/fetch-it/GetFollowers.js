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
                <>
                    <h1>FOLLOWED BY</h1>
                    { followedBy.map((followed, index) => 
                        <div key={index}>
                            <DisplayFollowers followed={followed} />
                        </div>
                    )}
                </>
            )
        }
        else return <></>
    }
  }
  
  export default GetFollowers