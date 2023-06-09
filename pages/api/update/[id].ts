// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function update( req: NextApiRequest, res: NextApiResponse ) {
  if (req.method !== "POST") return res.status(405).send({ message: "Only POST method are allowed!" })
  const { name, number, yearClass, Class, username, password } = req.body
  const { id, isUserUpdate } = req.query
  var pass = false
  
  console.log(name, number, yearClass, Class, username, password)
  
  try { 
    connectMongo()
    
    const c_1 = (name === "" || number === "" || yearClass === "" || Class === "" || username === "" || password === "")
    const c_2 = (name === undefined || number === undefined || yearClass === undefined || Class === undefined || username === undefined || password === undefined)
    
    if (c_1 && isUserUpdate === 'false' ) return res.status(201).send({ message: "Please full fill all of data" })
    if (c_2 && isUserUpdate === 'false' ) return res.status(202).send({ message: "Please full fill all of data" })
    
    const check:any[] = await Note.find({"loginData.username" : username})  
    const oldData:any = await Note.findOne({"studentData.studentId" : id})
    
    if ( check.length > 0 && isUserUpdate === 'false') var pass = !(check[0].loginData.username === username && oldData.loginData.username !== username)
    else if ( check.length > 0 && isUserUpdate === 'true' ) var pass = false
    else var pass = true
    
    if ( !pass ) return res.status(202).send({message: "Username is already taken."})
    
    if ( isUserUpdate === 'false' ) await Note.updateOne({ "studentData.studentId": id }, {$set: {"studentData.name": name, "studentData.classNumber": parseInt(number), "studentData.secondary": yearClass, "loginData.username": username, "loginData.password": password}})
    if ( isUserUpdate === 'true' ) await Note.updateOne({ "studentData.studentId": id }, {$set: {"loginData.username": username !== "" ? username : oldData.loginData.username, "loginData.password": password !== "" ? password : oldData.loginData.password } })
    
    return res.status(200).send({ message: true })
  } 
  catch (err) {
    return res.status(404).send({message: "Unknown Error"})
  }
}
