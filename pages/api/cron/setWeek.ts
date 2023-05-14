// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function setWeek( req: NextApiRequest, res: NextApiResponse ) {
    try {
        connectMongo()

        await Note.updateMany({}, {$set:{"studentData.weekDay": 0}})
        return res.status(200).send({msg: "Success"})
    }
    catch (err) {
        return res.status(400).send({msg: "Error"})
    }
}
