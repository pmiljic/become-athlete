import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from "nodemailer"

interface Props {
    fullName: string
    mail: string
    subject: string
    message: string
}
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.FROM_EMAIL,
        clientId: process.env.OAUTH2_CLIENT_ID,
        clientSecret: process.env.OAUTH2_CLIENT_SECRET,
        refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
        accessToken: process.env.OAUTH2_ACCESS_TOKEN
    }
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { fullName, mail, subject, message } = req.body

    if (fullName === "" || mail === "" || subject === "" || message === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ fullName, mail, subject, message })
    res.send(mailerRes)
}

const mailer = ({ fullName, mail, subject, message }: Props) => {
    const from = fullName && mail ? `${fullName} <${mail}>` : `${fullName || mail}`

    const completeMail = {
        from,
        to: process.env.TO_EMAIL,
        subject,
        text: message,
        replyTo: mail
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(completeMail, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
