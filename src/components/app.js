import React from 'react'
import YoutubeSearch from './youtubeSearch'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>ReactJS Youtube Instant Search</h1>
          </div>
        </div>
        <YoutubeSearch/>
      </div>
    )
  }
}
