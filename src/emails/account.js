const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, firstName, lastName) => {
  sgMail.send({
    to: email,
    from: 'jordanyatckoske@gmail.com',
    subject: 'Welcome to Task Manager',
    text: `Hello ${firstName}! Thank you so much for joining our service! `
  })
}

const sendExitEmail = (email, firstName, lastName) => {
  sgMail.send({
    to: email,
    from: 'jordanyatckoske@gmail.com',
    subject: 'We are sorry to see you go!',
    text: `${firstName}, \n\n Thank you so much for using our service. If you were unhappy with
                this application, let us know by replying to this email! \n\n Thanks you for choosing
                Task Manager! \n\t The Task Manager Team `
  })
}

module.exports = {
  sendWelcomeEmail,
  sendExitEmail
}
