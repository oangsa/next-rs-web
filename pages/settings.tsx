import { NextRouter, useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
interface checkboxState {
    "first-col-1-alt":boolean
    "sec-col-1-alt":boolean
    "th-col-1-alt":boolean
    "four-col-1-alt":boolean
    "five-col-1-alt":boolean
    "first-col-2-alt":boolean
    "sec-col-2-alt":boolean
    "th-col-2-alt":boolean
    "four-col-2-alt":boolean
    "five-col-2-alt":boolean
}

// type Student = {
//     studentData: {
//         name: string,
//         classNumber: string,
//         studentId: string,
//         secondary: string,
//         class: string,
//         status: boolean,
//         reason: string,
//         total: number,
//         weekDay: number,
//     },
//     loginData: {
//         username: string,
//         password: string
//     }
// }

const Settings = ({id}:any) => {
    const router: NextRouter = useRouter()
    const [score, setScore] = useState<number>(0)
    const [stateScore, setStateScore] = useState({
        "first-col-1-alt":true,
        "sec-col-1-alt":true,
        "th-col-1-alt":true,
        "four-col-1-alt":true,
        "five-col-1-alt":true,
        "first-col-2-alt":true,
        "sec-col-2-alt":true,
        "th-col-2-alt":true,
        "four-col-2-alt":true,
        "five-col-2-alt":true
    })
    const [getDepartment, setGetDepartment] = useState<string>("เลือกแผนก")
    const [advice, setAdvice] = useState<string>("")
    const [department, setDepartment] = useState([
        "ผู้ตรวจการ",
        "ศูนย์คุณภาพ",
        "แผนกประชาสัมพันธ์และการตลาด",
        "แผนกสิทธิประโยชน์",
        "แผนกโทรศัพท์",
        "แผนกห้องปฎิบัติการ",
        "แผนกรังสีวิทยา",
        "แผนกเภสัชกรรม",
        "แผนกการเงิน",
        "แผนกลูกค้าสัมพันธ์",
        "แผนกจัดซื้อและคลัง",
        "แผนกจ่ายกลาง",
        "แผนกอภิบาล",
        "แผนกกายภาพบำบัด",
    ])

    const onSubmit = () => {
        
    }

    return (
        <div>
            <div className="overflow-y-auto top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 md:h-full">
                <div className="relative p-8 w-full h-full md:h-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                ข้อมูลทั่วไป 📝
                            </h3>
                        </div>
                        <form>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>
                                <div>
                                    <label htmlFor="studentId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวนักเรียน</label>
                                    <input type="text" name="studentId" id="studentId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>
                                <div>
                                    <label htmlFor="yearClass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชั้นมัธยมศึกษาปีที่</label>
                                    <input type="text" name="yearClass" id="yearClass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>
                                <div>
                                    <label htmlFor="Class" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ห้อง</label>
                                    <input type="text" name="Class" id="Class" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>
                                <div>
                                    <label htmlFor="classNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่</label>
                                    <input type="text" name="classNumber" id="classNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    ตั้งค่าชื่อผู้ใช้ และรหัสผ่าน 📝
                                </h3>
                            </div>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>                                
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                                    <input type="text" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ประยุทธ์" required />
                                </div>                                
                            </div>
                        </form>
                        <button onClick={onSubmit} className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            บันทึก
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;