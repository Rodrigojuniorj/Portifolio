import { EmailTemplateProps, EmailTemplate } from '@/data/EmailTemplate';
import nodemailer from 'nodemailer';

export async function POST(request: Request): Promise<Response> {
  const response: EmailTemplateProps = await request.json();

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
    await transporter.sendMail({
      to: 'rodrigotavaresfranco@gmail.com',
      subject: "Contato via portifolio",
      html: bodyEmail
    });

    return Response.json('E-mail enviado com sucesso!')
  } catch (error) {
    return Response.json('Algo de errado aconteceu, tente novamente!');
  }
}