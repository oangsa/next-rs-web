import { ReactEventHandler, useState } from "react"
import { useRouter, NextRouter } from "next/router"

export default function AdminDashboard() {
    const router: NextRouter = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const submit = () => {
        
    }
    return (
        <>
            <div>This is Admin Dashboard page!</div>           
        </>
    )
}