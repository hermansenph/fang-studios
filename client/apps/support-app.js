import React from 'react'

export default class SupportApp extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      text: '',
      button: 'submit'
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  async handleClick() {
    if (this.state.button === 'sent') return

    const data = JSON.stringify({
      email: this.state.email,
      text: this.state.text
    })

    const post = await fetch('/form', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
    })
    if (post.status === 200) {
      this.setState({button: 'sent'})
    }
  }

  render() {
    return (
      <div id="support">
        <h3 id="support-header-h3" className="h3">Support</h3>
        <form id="support-form">
          <div id="support-email">
            <p className="support-p">Your Email</p>
            <input id="support-email-input" className="input"
              type="text" name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}/>
          </div>
          <p className="support-p">Description of Issue</p>
          <textarea className="input" name="Text1" cols="40" rows="5"
            value={this.state.text}
            onChange={this.handleTextChange}>
          </textarea>
          <button type="button" className={this.state.button}
            onClick={this.handleClick}>
            {this.state.button}
          </button>
        </form>
      </div>
    )
  }
}
