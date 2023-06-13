import nodemailer from 'nodemailer'


const email = process.env.EMAIL
const pass = process.env.EMAILPASS


export const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: email,
        pass
    }
})


export const mailOptions = {
    from: email,
    to: "esraidi12@gmail.com"
}