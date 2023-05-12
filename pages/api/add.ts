// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '@/libs/connectMongoClient'
import Note from '@/models/studentSchemas'

export default async function add( req: NextApiRequest,res: NextApiResponse) {
  if (req.method !== "POST" ) return res.status(405).send({message: "Only POST method is allowed!"})
  
  const { name, studentID, number, yearClass, Class } = req.body

  console.log(name, studentID, number, yearClass, Class)

  if ( name === undefined || studentID === undefined || number === undefined || yearClass === undefined || Class === undefined ) return res.status(401).send({ message: "Please send all of data in request!" })

  try {
    connectMongo()

    const check = await Note.findOne({"studentData.name" : name, "studentData.studentId" : studentID})

    console.log(check)

    if ( check !== null ) return res.status(201).send({ message: "Student is already exist!" })

    const studentStruct = {
      studentData: {
        name: name,
        classNumber: number,
        studentId: studentID,
        secondary: yearClass,
        class: Class,
        status: false,
        reason: "-",
        total: 0,
        weekDay: 0,
      },
      loginData: {
          username: name.split(" ")[0],
          password: studentID
      }
    }

    Note.create(studentStruct)

    return res.status(200).send({ message: "Success" })
  } 
  catch (err) {
    return res.status(404).send({ message: "Unexpected Error" })
  }

  
}
