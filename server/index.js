require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')

const app = express()
app
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .post('/form', async (req, res) => {
    const smtpConfig = {
      host: 'smtp.mail.com',
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {user: process.env.EMAIL, pass: process.env.PASS},
      tls: {ciphers: 'TLSv1.2'}
    }
    const transporter = nodeMailer.createTransport(smtpConfig)
    const message = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Support Request',
      text: 'From: ' + req.body.email + '\n\n' + req.body.text
    }
    transporter.sendMail(message, (err, info) => {
      if (err) console.log(err)
      else res.sendStatus(200)
    })

  })
  .listen(process.env.PORT || 3000, () => {
    console.log('Listening on :3000')
  })
