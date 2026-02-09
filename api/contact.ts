import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPrayerRequestEmail } from '../services/contactEmail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    const { data, error } = await sendPrayerRequestEmail(email, message);

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
