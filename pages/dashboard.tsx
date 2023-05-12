import { ReactEventHandler, useEffect, useState } from "react"
import { useRouter, NextRouter } from "next/router"
import { CookieValueTypes, getCookie, hasCookie } from 'cookies-next';
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import LeaveModal from "@/components/leaveModal";
import { modalOptions } from "@/libs/modalOption";
import { ModalInterface, Modal } from "flowbite";
import { RxDotFilled } from 'react-icons/rx'
import { FiLink } from 'react-icons/fi'
import { Metadata } from "next";
import jwtDecode from "jwt-decode";
export default function Dashboard({studentData, loginData}: Student) {
    const router: NextRouter = useRouter()

    useEffect(() => {
        console.log(studentData)
    })

    const leaveClick = () => {

        try {
    
            const $modalElement: any = document.querySelector('#leaveModal');
            
            const modal: ModalInterface = new Modal($modalElement, modalOptions);
    
            modal.show();
    
        } catch (err) {
            console.log(err)
        }
    }

    const submit = () => {
        
    }
    
    return (
        <>
            <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
            <div className="grid lg:grid-cols-3 gap-5 mb-16">
                <div className="rounded bg-white h-40 shadow-sm">
                    <div className="font-bold text-xl m-4" >สวัสดี, {studentData.name} 👋</div>
                </div>
                <div className="rounded bg-white h-40 shadow-sm">
                    <div>
                        <div className="mt-4 ml-4 inline-flex items-center justify-center rounded-lg text-lg text-center sm:w-auto">
                            <RxDotFilled/> 
                            ลาไปแล้ว {studentData.total} วัน
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 ml-4 inline-flex items-center justify-center rounded-lg text-lg text-center sm:w-auto">
                            <RxDotFilled/>
                            สัปดาห์นี้ลาไปแล้ว {studentData.weekDay.toString()} วัน
                        </div>
                    </div>
                </div>
                <div className="flex-none rounded bg-white h-40 shadow-sm">
                    <div className="mt-4 ml-4 inline-flex items-center justify-center rounded-lg text-lg text-center sm:w-auto">
                        <ChevronDoubleRightIcon className="h-5 w-5" />
                        ลาเลย !
                    </div>
                    <div className="mt-2 ml-4">
                        <button onClick={leaveClick} type="button" className="w-1/2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                            <FiLink className="mr-2 h-5 w-5"/>
                            ลาที่นี่
                        </button>
                        <LeaveModal name={studentData.name} studentId={studentData.studentId} />
                    </div>
                </div>
            </div>
            <div className="font-bold text-xl mb-4">
                🛠️ Update Log 🛠️
            </div>
            <div className="grid col-1 bg-white h-96 shadow-sm">
                <div className="m-4 text-lg">
                    Update 1.0: Released Full Version
                </div>
            </div>           
        </>
    )
}

export const getStudent = async (studentId: CookieValueTypes) => {
    const baseURL = process.env.NODE_ENV === 'production' ? process.env.VERCEL_URL : process.env.BASE_URL
    console.log(baseURL)
    const res = await fetch(`${baseURL}/api/getStudent/${studentId}`)

    if (!res.ok) throw new Error('Failed To Fetch User')

    return res.json()
}

export const getServerSideProps = async ({ req }:any) => {
    const token: any = jwtDecode(req.headers.cookie.split("=")[1], {header: true})
    const data: Promise<Student> = getStudent(token.studentId)
    const [student] = await Promise.all([data])
    return {
        props: {
            studentData: student.studentData,
            loginData: student.loginData
        }
    }
}