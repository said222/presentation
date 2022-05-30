export default function (req, res) {
  require('dotenv').config()

  
  let nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransport({    
    host: "smtp.mailtrap.io",
       auth: {
            user: process.env.APP_USER,
            pass: process.env.APP_PASS,
         },
    // secure: true,
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  const mailData = {
      from: 'demo email <email@test.com>',
      to: 'ssosystem34@gmail.com',
      subject: `Message From ${req.body.name} subject ${req.body.subject} `,
      text: req.body.message + " | Sent from: " + req.body.email + " | Sent from: " + req.body.phone,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p><p>Sent from: ${req.body.phone}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })


  console.log(req.body)
  res.send('success')
}