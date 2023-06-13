import nodemailer from 'nodemailer'





export const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: "achrafesraidi@outlook.fr",
        pass: "achraf12@@.."
    }
})


export const mailOptions = {
    from: "achrafesraidi@outlook.fr",
    to: "esraidi12@gmail.com"
}