import React from 'react'
import HeaderApp from './apps/header-app'
import ZvhApp from './apps/zvh-app'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {page: ''}
  }

  render() {
    return (
      <div>
        <HeaderApp />
        <ZvhApp />
      </div>
    )
  }

}
