// define our transporter here
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// defines from and to for the email. We use our email for both because the form is not going to actually access the sender's email account and send the email from their email. Rather, the form is sending us a copy of our form contents
export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};
