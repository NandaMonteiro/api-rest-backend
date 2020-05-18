const nodemailer = require('nodemailer');

const mailserver = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'octavia.macejkovic30@ethereal.email',
        pass: 'G2MaTKqYdUxPuAst13'
    }
}

const FROM = 'noreply@ad-2019.com';
const SUBJECT = 'Amigo secreto';
const BODY = `
    <div>
        Olá <strong>{0}</strong>. Seu amigo(a) secretro é <strong>{1}</strong>.
    </div>
`;

const transporter = nodemailer.createTransport(mailserver);

exports.send = (personName, to, friendName) => {
    const message = {
        from: FROM,
        to: to,
        subject: SUBJECT,
        html: BODY.replace('{0}', personName).replace('{1}', friendName)
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            throw error;
        }
    })
}