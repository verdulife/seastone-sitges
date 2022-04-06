import { SMTPClient } from 'emailjs';

export async function post({ request }) {
  const { name, email, phone, message } = await request.json();

  const client = new SMTPClient({
    user: import.meta.env.VITE_EMAIL_USER,
    password: import.meta.env.VITE_EMAIL_PASS,
    host: 'smtp.ionos.es',
    ssl: true,
  });

  client.send(
    {
      from: `Seastone Homes Sitges Web <${import.meta.env.VITE_EMAIL_USER}>`,
      to: `Seastone Homes Sitges Web <${import.meta.env.VITE_EMAIL_USER}>`,
      subject: name,
      text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
\n
  ${message}
`,
    },
    (err, message) => {
      return {
        body: {
          status: 'error',
        }
      };
    }
  );

  return {
    body: {
      status: 'ok',
    }
  };
}