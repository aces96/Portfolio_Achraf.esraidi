import {transporter, mailOptions} from '../../../config/nodemailer'

export async function POST(request: Request,){

    const body = await request.json()

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: 'Message from portfolio contact',
                text: body.message
            })
            const res = {message: 'mail sent successfully'}
            const myOptions = { status: 200};
            return new Response(JSON.stringify(res), myOptions)

        } catch (error) {
            console.log()
            const res = {message: "something wrong occured"}
            const myOptions = { status: 400};
            return new Response(JSON.stringify(res), myOptions)
        }
}