// const nodemailer = require('nodemailer');
// const creds = require('../config/config');
// const routes = require('./routes/routes');

// module.exports = {
//     USER: 'learn.tauhidul@gmail.com', 
//     PASS: 'w0rdP@55'
// }



// const transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// const transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });


// routes.post('/send', (req, res, next) => {
//     const name = req.body.name
//     const email = req.body.email
//     const message = req.body.message
//     const content = `name: ${name} \n email: ${email} \n message: ${message} `
  
//     const mail = {
//       from: name,
//       to: 'mail.tauhidul@gmail.com',  //Change to email address that you want to receive messages on
//       subject: 'New Message from Contact Form',
//       text: content
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           msg: 'fail'
//         })
//       } else {
//         res.json({
//           msg: 'success'
//         })
//       }
//     })
//   })