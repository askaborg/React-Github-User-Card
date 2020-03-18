import React from 'react'

const DisplayFollowers = props => {
    const { followed, index } = props
    return (
        <div key={index}>
            <p>Username: {followed.login}</p>
            <a href={followed.html_url}>Profile</a>
            {/* <p>Username: </p> */}
        </div>
    )    
}

export default DisplayFollowers