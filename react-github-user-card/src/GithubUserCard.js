import React from 'react'

import { GetUser, GetFollowers } from './components/fetch-it'

function GithubUserCard() {
  return (
    <div>
      <h1>GithubUserCard</h1>
      <GetUser />
      <GetFollowers />
    </div>
  )
}

export default GithubUserCard