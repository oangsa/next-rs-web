// const res = await fetch("https://www.tv5.co.th/api_base/api_bridge.php?type=county1")

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getElectionResult( req: NextApiRequest, res: NextApiResponse ) {
    if (req.method !== "GET") return res.status(401).send({message: "Only GET method is allow!"})
    
    const result = await fetch("https://www.tv5.co.th/api_base/api_bridge.php?type=county2")

    return await result.json()
}
