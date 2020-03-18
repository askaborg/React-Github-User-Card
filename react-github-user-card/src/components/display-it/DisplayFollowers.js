import React from 'react'

const DisplayFollowers = props => {
    const { followed} = props
    return (
        <div>
            <p>Username: {followed.login}</p>
            <a href={followed.html_url}>Profile</a>
        </div>
    )    
}

export default DisplayFollowers