import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email, code } = JSON.parse(event.body || '{}');

  if (!email || !code) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email and code are required' }) };
  }

  try {
    // Here you would check if the provided code matches the one stored for this email
    // This is a placeholder implementation
    const isCodeValid = true; // Replace with actual verification logic

    if (isCodeValid) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Confirmation code verified successfully' }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid confirmation code' }),
      };
    }
  } catch (error) {
    console.error('Error verifying confirmation code:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to verify confirmation code' }),
    };
  }
};
