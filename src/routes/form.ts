import { SMTPClient } from 'emailjs';

//const emailTo = 'sitges@seastone.es';
const emailTo = 'verdukactus@gmail.com';

export async function post({ request }) {
	const { name, email, phone, message } = await request.json();

	const client = new SMTPClient({
		user: import.meta.env.VITE_EMAIL_USER as string,
		password: import.meta.env.VITE_EMAIL_PASS as string,
		host: 'smtp.ionos.es',
		ssl: true
	});

	try {
		await client.sendAsync({
			from: `Seastone Homes Sitges Web <${import.meta.env.VITE_EMAIL_USER}>`,
			to: `Seastone Homes Sitges <${emailTo}>`,
			subject: name,
			text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
\n
  ${message}
`
		});

		return {
			body: {
				status: 'ok',
				from: `Seastone Homes Sitges Web <${import.meta.env.VITE_EMAIL_USER}>`,
				to: `Seastone Homes Sitges <${emailTo}>`
			}
		};
	} catch (err) {
		return {
			body: {
				status: 'error',
				err
			}
		};
	}
}
