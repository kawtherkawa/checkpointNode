const nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'hb.kaouther@live.fr',
    pass: 'MDP'
  }
});

const mailOptions = {
  from: 'hb.kaouther@live.fr',
  to: 'kaouther.braiek@gmail.com',
  subject: 'Sending Email',
  text: 'That was nice!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});