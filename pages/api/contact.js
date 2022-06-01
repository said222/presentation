export default async function (req, res) {
  require('dotenv').config()

  
  let nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransport({    
    host: "smtp.mailtrap.io",
    port: 587,
    debug: true,
    secure: false,
    auth: {
      user: '9de9cf39d33a6d',
      pass: '234ecaabea398d',
   },
    // secure: true,
  });

  await new Promise((resolve, reject) => {
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
      reject(error)
    } else {
      console.log("Server is ready to take our messages");
      resolve(success)
    }
  })
});
  
  const mailData = {
      from: 'demo email <email@test.com>',
      to: 'ssosystem34@gmail.com',
      subject: `Message From ${req.body.name} `,
      text: "Subject: " +req.body.subject + "Message: " +req.body.message + " | Sent from: " + req.body.email + " | phone number : " + req.body.phone,
      html: `<div><p>Subject: ${req.body.subject}</p></div><div><p>Message: ${req.body.message}</p></div><p>Sent from: ${req.body.email}</p><p>phone number: ${req.body.phone}</p>`
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if(err){
        console.log(err)
        reject(error)
      }
      else{
        console.log(info);
        resolve(success)
      }
  })})



  console.log(req.body)
  res.send('success')
}