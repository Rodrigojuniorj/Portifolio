export type EmailTemplateProps = {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <html>
      <h1>Uma pessoa entrou em contato através do portifólio</h1>
        <br />
        <b>Nome: </b> ${name}
        <br />
        <b>E-mail: </b> ${email}
        <br />
        <br />
        <b>Message: </b>
        ${message}
    </html>
  );
}
