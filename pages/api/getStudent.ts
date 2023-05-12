// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../libs/connectMongoClient'
import Note from '../../models/studentSchemas'

export default async function getStudent(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    
    if (req.method !== "GET") return res.status(405).send({message: "Only GET method is allowed!"})

    try {
        connectMongo()
        
        const result = await Note.findOne({"studentData.studentId" : id})
        
        if (result === null) return res.status(400).send({message: "User is not valid."})

        return res.status(200).send(result)

    } catch (err) {
        return res.status(404).send({message: "Unknown Error"})
    }
}
