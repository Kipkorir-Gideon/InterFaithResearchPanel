require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors({ origin: 'https://interfaithresearchpanel.org' }));
app.use(express.json());

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Nodemailer with Truehost SMTP
const transporter = nodemailer.createTransport({
  host: 'mail.interfaithresearchpanel.org',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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
  res.json({ message: 'API is running! Use /api/submit-form, /api/submit-contact-form, or /api/submit-application.' });
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

// Join Us Application form endpoint
apiRouter.post('/submit-application', upload.single('resume'), async (req, res) => {
  const { fullName, email, phone, organization, position, experience, interests, message } = req.body;
  if (!fullName || !email || !phone || !interests || !message) {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    return res.status(400).json({ 
      success: false, 
      message: 'Full name, email, phone, areas of interest, and message are required' 
    });
  }
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.JOIN_RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Application: ${fullName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e40af; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #4b5563; }
          .field-value { margin-top: 5px; }
          .footer { margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Membership Application</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${fullName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${phone}</div>
            </div>
            ${organization ? `
            <div class="field">
              <div class="field-label">Current Organization</div>
              <div class="field-value">${organization}</div>
            </div>
            ` : ''}
            ${position ? `
            <div class="field">
              <div class="field-label">Current Position</div>
              <div class="field-value">${position}</div>
            </div>
            ` : ''}
            ${experience ? `
            <div class="field">
              <div class="field-label">Years of Experience</div>
              <div class="field-value">${experience}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="field-label">Areas of Interest/Expertise</div>
              <div class="field-value">${interests}</div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ${req.file ? `
            <div class="field">
              <div class="field-label">Resume</div>
              <div class="field-value">
                <a href="${process.env.BASE_URL}/api/download/${req.file.filename}" 
                   style="color: #3b82f6; text-decoration: none;">
                  Download Resume (${req.file.originalname || 'file'})
                </a>
              </div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This is an automated message from Interfaith Research Panel. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Interfaith Research Panel. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    attachments: req.file ? [{
      filename: req.file.originalname || 'resume.pdf',
      path: req.file.path
    }] : []
  };
  try {
    await transporter.sendMail(mailOptions);
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application. Please try again later.' 
    });
  }
});

// Endpoint to serve uploaded files
apiRouter.get('/download/:filename', (req, res) => {
  const file = path.join(__dirname, 'uploads', req.params.filename);
  res.download(file, (err) => {
    if (err) {
      if (!res.headersSent) {
        res.status(404).json({ success: false, message: 'File not found' });
      }
    }
    fs.unlink(file, (err) => {
      if (err) console.error('Error deleting file:', err);
    });
  });
});

// Mount API routes
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
