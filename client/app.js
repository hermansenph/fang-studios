import React from 'react'
import ZvhApp from './apps/zvh-app'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {page: ''}
  }

  render() {

    if (!this.state.page) {
     return (
       <div>
          <div id="header">
            <h1 id="header-text">FANG STUDIOS</h1>
          </div>
          <ZvhApp />
       </div>
     )
   }

  }

}
