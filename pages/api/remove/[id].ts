// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getJwtSecretKey } from '@/libs/auth'
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import { SignJWT } from 'jose'
import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function remove( req: NextApiRequest, res: NextApiResponse ) {
  if (req.method !== "DELETE") return res.status(405).send({ message: "Only DELETE method are allowed!" })

  const { id } = req.query

  try {
    connectMongo()
    
    const result = await Note.deleteOne({"studentData.studentId": id})

    if (!result.acknowledged) return res.status(201).send({ message: false })

    return res.status(200).send({ message: true })

} catch (err) {
    return res.status(404).send({message: "Unknown Error"})
}
}
