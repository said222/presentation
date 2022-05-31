export default function (req, res) {
  require('dotenv').config()

  
  let nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransport({    
    host: "smtp.mailtrap.io",
    port: 2525,
       auth: {
            user: '9de9cf39d33a6d',
            pass: '234ecaabea398d',
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
      subject: `Message From ${req.body.name} `,
      text: "Subject: " +req.body.subject + "Message: " +req.body.message + " | Sent from: " + req.body.email + " | phone number : " + req.body.phone,
      html: `<div><p>Subject: ${req.body.subject}</p></div><div><p>Message: ${req.body.message}</p></div><p>Sent from: ${req.body.email}</p><p>phone number: ${req.body.phone}</p>`
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