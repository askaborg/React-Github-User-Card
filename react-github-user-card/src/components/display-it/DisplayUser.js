import React from 'react'

const DisplayUser = props => {
    const { profile } = props
    return (
        <div>
            <img src={profile.avatar_url} alt="profile"></img>
            <p>Username: {profile.login}</p>
        </div>
    )    
}

export default DisplayUser