import nodemailer from 'nodemailer';
import { html } from './htmlEmail';

const sendEmail = async ({ to, url, text }) => {
  const transporter = nodemailer.createTransport({
    // service: 'smtp.ukr.net',
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.UKR_NET_EMAIL_USER,
      pass: process.env.UKR_NET_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.UKR_NET_EMAIL_USER,
    to,
    subject: 'Dmitriy' | 'NextAuth',
    html: html({ url, text }),
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};

export default sendEmail;
