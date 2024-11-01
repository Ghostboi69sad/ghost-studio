"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const nodemailer_1 = require("nodemailer");
const crypto_1 = require("crypto");
const transporter = (0, nodemailer_1.createTransport)({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});
const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    const { email } = JSON.parse(event.body || '{}');
    if (!email) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) };
    }
    const confirmationCode = (0, crypto_1.randomBytes)(3).toString('hex');
    try {
        await transporter.sendMail({
            from: `"Ghost Studio Academy" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Your Confirmation Code',
            text: `Your confirmation code is: ${confirmationCode}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to Ghost Studio Academy</h2>
          <p>Your confirmation code is: <strong>${confirmationCode}</strong></p>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `,
        });
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Confirmation code sent successfully',
                code: confirmationCode
            }),
        };
    }
    catch (error) {
        console.error('Error sending confirmation code:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to send confirmation code',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
        };
    }
};
exports.handler = handler;
