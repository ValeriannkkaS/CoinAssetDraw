import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

class MailServices {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // пока что
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    async sendActivationEmail(to, username, link) {
        console.log(link);
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation account by email on' + process.env.API,
            text: '',
            html: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome!</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: 'Segoe UI', sans-serif;
    }
    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .email-header {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      padding: 30px;
      text-align: center;
      color: white;
    }
    .email-header h1 {
      margin: 0;
      font-size: 28px;
    }
    .email-body {
      padding: 30px;
      color: #333;
    }
    .email-body h2 {
      margin-top: 0;
    }
    .email-body p {
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #2575fc;
      color: white;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(37, 117, 252, 0.4);
      transition: background 0.3s ease;
    }
    .button:hover {
      background-color: #1a5ed8;
    }
    .email-footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Welcome to Our App!</h1>
    </div>
    <div class="email-body">
      <h2>Hello, ${username}!</h2>
      <p>Thank you for signing up. We're excited to have you on board!</p>
      <p>Please click the button below to confirm your email address:</p>
      <a href="${link}" class="button">Confirm Email</a>
      <p>If you did not sign up for this account, you can safely ignore this email.</p>
    </div>
    <div class="email-footer">
      © 2025 CoinAssetDraw. All rights reserved.<br>
      <a href="https://yourwebsite.com" style="color: #888;">Visit our website</a><!--потом стоит доделать-->
    </div>
  </div>
</body>
</html>
                `,
        });
    }
}

export default new MailServices();
