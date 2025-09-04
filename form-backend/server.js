require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'https://interfaithresearchpanel.org' }));
app.use(express.json());

// Configure Nodemailer with Truehost SMTP
const transporter = nodemailer.createTransport({
  host: 'mail.interfaithresearchpanel.org',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // mail@interfaithresearchpanel.org
    pass: process.env.EMAIL_PASS, // Your cPanel email password
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) console.error('SMTP verification error:', error);
  else console.log('SMTP server is ready');
});

// Mount routes under /api
const apiRouter = express.Router();

// Root route for /api/
apiRouter.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ message: 'API is running! Use /api/submit-form or /api/submit-contact-form.' });
});

// Conference form endpoint
apiRouter.post('/submit-form', async (req, res) => {
  const { name, email, phone, organization } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Event Registration: ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(to right, #1e3a8a, #3b82f6); padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
          .header h1 { color: #ffffff; font-size: 24px; margin: 0; }
          .header p { color: #e5e7eb; font-size: 14px; margin: 5px 0 0; }
          .content { padding: 20px; }
          .content h2 { color: #1f2937; font-size: 20px; margin-bottom: 15px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
          th { background: #f9fafb; color: #374151; font-weight: bold; }
          td { color: #4b5563; }
          .footer { background: #f9fafb; padding: 15px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
          .footer p { color: #6b7280; font-size: 12px; margin: 0; }
          .footer a { color: #3b82f6; text-decoration: none; }
          @media only screen and (max-width: 600px) {
            .container { width: 100%; margin: 10px; }
            .header h1 { font-size: 20px; }
            th, td { font-size: 14px; padding: 10px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>1st International Conference</h1>
            <p>Pioneering The Future For Humanity</p>
          </div>
          <div class="content">
            <h2>New Registration</h2>
            <table>
              <tr><th>Name</th><td>${name}</td></tr>
              <tr><th>Email</th><td>${email}</td></tr>
              <tr><th>Phone</th><td>${phone}</td></tr>
              <tr><th>Organization</th><td>${organization || 'Not provided'}</td></tr>
            </table>
          </div>
          <div class="footer">
            <p>Interfaith Research Panel | <a href="https://www.interfaithresearchpanel.org">www.interfaithresearchpanel.org</a></p>
            <p>Event Date: 10th - 12th February 2026 | Tamarind Tree Hotel, Nairobi, Kenya</p>
            <p>Reply to this email to contact the registrant directly.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Contact form endpoint
apiRouter.post('/submit-contact-form', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, subject, and message are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(to right, #1e3a8a, #3b82f6); padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; }
          .header h1 { color: #ffffff; font-size: 24px; margin: 0; }
          .header p { color: #e5e7eb; font-size: 14px; margin: 5px 0 0; }
          .content { padding: 20px; }
          .content h2 { color: #1f2937; font-size: 20px; margin-bottom: 15px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
          th { background: #f9fafb; color: #374151; font-weight: bold; }
          td { color: #4b5563; }
          .message { white-space: pre-wrap; }
          .footer { background: #f9fafb; padding: 15px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
          .footer p { color: #6b7280; font-size: 12px; margin: 0; }
          .footer a { color: #3b82f6; text-decoration: none; }
          @media only screen and (max-width: 600px) {
            .container { width: 100%; margin: 10px; }
            .header h1 { font-size: 20px; }
            th, td { font-size: 14px; padding: 10px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Form Submission</h1>
            <p>Interfaith Research Panel</p>
          </div>
          <div class="content">
            <h2>New Message</h2>
            <table>
              <tr><th>Name</th><td>${name}</td></tr>
              <tr><th>Email</th><td>${email}</td></tr>
              <tr><th>Subject</th><td>${subject}</td></tr>
              <tr><th>Message</th><td class="message">${message}</td></tr>
            </table>
          </div>
          <div class="footer">
            <p>Interfaith Research Panel | <a href="https://www.interfaithresearchpanel.org">www.interfaithresearchpanel.org</a></p>
            <p>Reply to this email to contact the submitter directly.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Mount API routes
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));