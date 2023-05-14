// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function sendLine( req: NextApiRequest, res: NextApiResponse ) {
    return res.status(400).send({msg: "Unavailable RN"})
}
