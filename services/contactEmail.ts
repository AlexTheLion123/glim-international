import { Resend } from 'resend';

type SendResult = {
  data?: unknown;
  error?: unknown;
};

let resendClient: Resend | null = null;

const getResendClient = () => {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
};

export const sendPrayerRequestEmail = async (email: string, message: string): Promise<SendResult> => {
  const resend = getResendClient();

  return resend.emails.send({
    from: 'GLIM Prayer Requests <onboarding@resend.dev>',
    to: ['info.gliminternational@gmail.com'],
    subject: `Prayer Request from ${email}`,
    html: `
      <h2>Prayer Request</h2>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });
};
