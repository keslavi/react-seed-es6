import mail from "nodemailer";
import config from "../config/main.js";

export const sendMail = async (recipient, subject, body) => {
  const transport = mail.createTransport({
    service: "gmail",
    auth: {
      user: config.mailAuth.username,
      pass: config.mailAuth.password
    }
  });

  const mailOptions = {
    from: "dev@evensteven.us",
    to: recipient,
    subject: subject,
    html: `<p>${body}</p>`
  };

  transport.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

// class Mailer{

//   send (recipient,subject,body,template){
//     var ret="failed";
//     var transporter=mail.createTransport({
//       service: "Gmail",
//       auth:{
//         user: config.mailAuth.username,
//         pass: config.mailAuth.password
//       }
//     });

//     var mailOptions = {
//       from: 'dev@evensteven.us', // sender address
//       to: recipient, // list of receivers
//       subject: subject, // Subject line
//       text: body //, // plaintext body
//       // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error);
//             ret= 'error';
//         }else{
//             console.log('Message sent: ' + info.response);
//             ret=info.response;
//         };
//     });

//     return ret;
//   }
// }

// export default Mailer;
