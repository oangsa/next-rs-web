// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../libs/connectMongoClient'
import Note from '../../models/studentSchemas'

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body
    if (req.method !== "POST") return res.status(405).send({message: "Only GET method is allowed!"})

    console.log(username)
    try {
        connectMongo()
        const result = await Note.findOne({loginData: { username: username, password: password}})
        console.log(result)
        return res.status(200).send(result)

    } catch (err) {
        return res.status(404).send({message: "Unknown Error"})
    }
}
