import Navbar from "@/components/sideBar";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router: AppRouterInstance = useRouter()
    return (
        <div>
            <div>Home Page</div>
        </div>
    )
}