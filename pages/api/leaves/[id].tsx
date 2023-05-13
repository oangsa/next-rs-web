import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function leave( req: NextApiRequest, res: NextApiResponse ) {
    if (req.method !== "POST") return res.status(402).send({ message: "Only POST method is allow!" })
    
    const { id } = req.query

    const { half, reason, other } = req.body
    
    if (half === "" || reason === "" ) return res.status(201).send({ message: "Please full fill all of data" })
    
    if (half === undefined || reason === undefined || other === undefined ) return res.status(202).send({ message: "Please full fill all of data" })
    
    const reasons = reason === "อื่นๆ" ? other : reason

    try {
        connectMongo()
        const oldData = await Note.findOne({ "studentData.studentId": id })
        
        const result = await Note.updateOne({ "studentData.studentId": id }, { $set: { "studentData.status": true, "studentData.reason": reasons, "studentData.total": oldData.studentData.total + 1, "studentData.weekDay": oldData.studentData.weekDay + 1 } })

        console.log(result)

        if (!result.acknowledged) return res.status(201).send({ success: false })
        return res.status(200).send({ success: true })
    }
    catch (err) {
        return res.status(404).send({ message: " Unknown Error Occored" })
    }
}
