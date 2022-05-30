export default function (req, res) {
  require('dotenv').config()

  
  let nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransport({
    port: 587,     
    host: "smtp.gmail.com",
       auth: {
            user: process.env.USER,
            pass: process.env.PASS,
         },
    secure: false,
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  const mailData = {
      from: 'demo email',
      to: 'aionservicechatbot@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
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