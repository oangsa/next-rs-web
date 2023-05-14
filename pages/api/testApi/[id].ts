// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest,res: NextApiResponse) {
    const { id, isUserUpdate } = req.query

    if (!isUserUpdate) return res.status(300).send({mesage:"success"})
    return res.status(200).send({mesage:"success"})
}
