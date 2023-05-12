import { NextRouter, useRouter } from "next/router";

const del = async (id: any) => {
    // const router: NextRouter = useRouter()
    const res = await fetch(`/api/remove/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })

    if (res.status !== 200) return;

    console.log("success")

    // router.reload()
}

export default del; 