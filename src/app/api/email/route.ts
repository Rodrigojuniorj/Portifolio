import { EmailTemplateProps, EmailTemplate } from '@/data/EmailTemplate';
import nodemailer from 'nodemailer';
import ReactDOMServer from 'react-dom/server';

export async function POST(request: Request, res: Response) {
  const response: EmailTemplateProps = await request.json();
  // Configurar o Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "junioryrj@gmail.com",
      pass: "oyjn prnc rfcy zfqz",
    },
  });

  const bodyEmail = `
    <html>
      <h3>Uma pessoa entrou em contato através do portifólio</h3>
      <br />
      <b>Nome: </b> ${response.name}
      <br />
      <b>E-mail: </b> ${response.email}
      <br />
      <br />
      <b>Message: </b>
      ${response.message}
    </html>
  `

  try {
    // Enviar e-mail
    await transporter.sendMail({
      // from: 'seuemail@gmail.com',
      to: 'rodrigotavaresfranco@gmail.com',
      subject: "Contato via portifolio",
      html: bodyEmail
    });

    // Responder com sucesso
    return new Response('OK')
  } catch (error) {
    // Se houver algum erro, responder com o erro
    console.error('Erro ao enviar e-mail:', error);
  }

  return new Response('OK')
}