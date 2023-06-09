import AddModal from '@/components/addModal'
import EditBtn from '@/components/editBtn'
import Pagnation from '@/components/pagination'
import Navbar from '@/components/sideBar'
import UserListComp from '@/components/userlist'
import { paginate } from '@/utils/paginate'
import { NextRouter, useRouter } from 'next/router'
import { SetStateAction, useEffect, useState } from 'react'


export default function AltUserList() {
    const router: NextRouter = useRouter()
    const [data, setData] = useState([])
    const [openModal, setModalOpen] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pageSize = 10
    const [testData, setTestData] = useState([
        {"studentData":{"name":"นราวิชญ์ วรรัตน์โภคา","classNumber":"24","studentId":"58515","secondary":"6","class":"5","status":false,"reason":"-","total":0,"weekDay":0},"loginData":{"username":"นราวิชญ์","password":"58515"}},
        {"studentData":{"name":"สุธางค์ สุขเรืองกูล","classNumber":"27","studentId":"58528","secondary":"6","class":"5","status":false,"reason":"-","total":0,"weekDay":0},"loginData":{"username":"สุธางค์","password":"58528"}}
    ]) 

    const getData = async () => {
        const res = await fetch("/api/getAllStudent")

        const d = await res.json()
        
        setData(d)
    }

    useEffect(() => {
        
        getData();
        
    }, [])


    const handlePageChange = (page: SetStateAction<number>) => {
        setCurrentPage(page)
    }

    const paginateStudent = paginate(data, currentPage, pageSize)

    const showStudent = true

    return (
        <div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 block sm:flex items-center justify-between border-b border-gray-200">
                    <div className="mb-1 w-full">
                        <div className="mb-4">
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white underline">Student Lists</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                        <AddModal></AddModal>
                    </div>
                </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:m-16 md:m-8">
                {showStudent === true ? (
                    <>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3" >Name</th>
                                    <th scope="col" className="px-6 py-3" >Year Class</th>
                                    <th scope="col" className="px-6 py-3" >Class</th>
                                    <th scope="col" className="px-6 py-3" >NUmber</th>
                                    <th scope="col" className="px-6 py-3" >Student Id</th>
                                    <th scope="col" className="px-6 py-3" >Status</th>
                                    <th scope="col" className="px-6 py-3" >Total</th>
                                    <th scope="col" className="px-6 py-3"></th>              
                                </tr>
                            </thead>
                            <tbody>
                                {paginateStudent.map((element) => {
                                    const editStudent = (
                                        <EditBtn key={element.studentData.studentId} name={element.studentData.name} studentID={element.studentData.studentId} yearClass={element.studentData.secondary} Class={element.studentData.class} number={element.studentData.classNumber} username={element.loginData.username} password={element.loginData.password}/>
                                    )
                                    return (<UserListComp key={element.studentData.studentId} name={element.studentData.name} studentId={element.studentData.studentId} secondary={element.studentData.secondary} Class={element.studentData.class} classNumber={element.studentData.classNumber} status={element.studentData.status} total={element.studentData.total} editStudent={editStudent} />)
                                })}
                            </tbody>
                        </table>
                    </> 
                ) : (
                    <p>None of student!</p>
                )}     
            </div>
            <Pagnation items={data.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}></Pagnation> 
        </div>
    )
}

