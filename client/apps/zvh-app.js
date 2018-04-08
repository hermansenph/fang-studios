import React from 'react'

export default class ZvhApp extends React.Component {

  render() {
    return (
      <div id="zvh">
        <img id="zvh-header-img" src="images/zvh-header.jpg"/>
        <div id="zvh-header">
          <h3 id="zvh-header-h3">ZvH: Zombies v. Humans</h3>
          <div id="zvh-header-underline"></div>
        </div>
        <img id="zvh-title" src="images/zvh-title.jpg"/>
        <img id="zvh-gameplay-1" className="zvh-gameplay-images" src="images/zvh-gameplay-1.jpg"/>
        <img id="zvh-gameplay-2" className="zvh-gameplay-images" src="images/zvh-gameplay-2.jpg"/>
        <div id="zvh-yt-div">
          <iframe id="zvh-yt-iframe"
            src="https://www.youtube.com/embed/zO2KhI8KeA8"
            width="641" height="360" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}
