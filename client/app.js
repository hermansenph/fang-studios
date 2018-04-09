import React from 'react'
import HeaderApp from './apps/header-app'
import ZvhApp from './apps/zvh-app'
import SupportApp from './apps/support-app'
import PrivacyApp from './apps/privacy-app'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {page: ''}
  }

  render() {

    if (!window.location.hash) {
      return (
        <div>
          <HeaderApp />
          <ZvhApp />
        </div>
      )
    }

    if (window.location.hash === '#support') {
      return (
        <div>
          <HeaderApp />
          <SupportApp />
        </div>
      )
    }

    if (window.location.hash === '#privacy') {
      return (
        <div>
          <HeaderApp />
          <PrivacyApp />
        </div>
      )
    }

  }

}
