// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function update( req: NextApiRequest, res: NextApiResponse ) {
  if (req.method !== "POST") return res.status(405).send({ message: "Only POST method are allowed!" })

  const { name, number, yearClass, Class, username, password } = req.body

  const { id } = req.query

  console.log(name, number, yearClass, Class, username, password)

  var pass = false 
  
  try {
    connectMongo()
    
    if (name === "" || number === "" || yearClass === "" || Class === "" || username === "" || password === "" ) return res.status(201).send({ message: "Please full fill all of data" })
    
    if (name === undefined || number === undefined || yearClass === undefined || Class === undefined || username === undefined || password === undefined ) return res.status(202).send({ message: "Please full fill all of data" })
    
    const check = await Note.findOne({"studentData.name" : name, "studentData.studentId" : id})

    if (check.loginData.password !== password || check.loginData.username !== username) var pass = true 

    if (check !== null && !pass) return res.status(202).send({message: "Student is already exist."})

    await Note.updateOne({ "studentData.studentId": id }, {$set: {"studentData.name": name, "studentData.classNumber": number, "studentData.secondary": yearClass, "loginData.username": username, "loginData.password": password}})

    return res.status(200).send({ message: true })

  } 
  catch (err) {
    return res.status(404).send({message: "Unknown Error"})
  }
}
