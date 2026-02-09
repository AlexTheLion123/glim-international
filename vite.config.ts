import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sendPrayerRequestEmail } from './services/contactEmail';

const readRequestBody = (req: IncomingMessage): Promise<string> => {
  return new Promise((resolve, reject) => {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
};

const sendJson = (res: ServerResponse, status: number, payload: Record<string, unknown>) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

const apiContactPlugin = (env: Record<string, string>) => {
  return {
    name: 'api-contact',
    configureServer(server: { middlewares: { use: (path: string, handler: (req: IncomingMessage, res: ServerResponse) => void) => void } }) {
      if (env.RESEND_API_KEY && !process.env.RESEND_API_KEY) {
        process.env.RESEND_API_KEY = env.RESEND_API_KEY;
      }

      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          return res.end();
        }

        if (req.method !== 'POST') {
          return sendJson(res, 405, { error: 'Method not allowed' });
        }

        try {
          const rawBody = await readRequestBody(req);
          const body = rawBody ? JSON.parse(rawBody) : {};
          const email = body?.email;
          const message = body?.message;

          if (!email || !message) {
            return sendJson(res, 400, { error: 'Email and message are required' });
          }

          const { data, error } = await sendPrayerRequestEmail(email, message);

          if (error) {
            console.error('Resend error:', error);
            return sendJson(res, 500, { error });
          }

          return sendJson(res, 200, { success: true, data });
        } catch (error) {
          console.error('Email error:', error);
          return sendJson(res, 500, { error: 'Failed to send email' });
        }
      });
    },
  };
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), apiContactPlugin(env)],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
