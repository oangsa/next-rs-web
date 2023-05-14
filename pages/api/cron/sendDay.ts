// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function sendDay( req: NextApiRequest, res: NextApiResponse ) {
    return res.status(400).json({ msg: 'unavailable' })
}
