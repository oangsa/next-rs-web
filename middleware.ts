import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./libs/auth";


export async function middleware(req: NextRequest) {
    const token = req.cookies.get('user-token')?.value

    const verifyToken = token && (await verifyAuth(token).catch((err) => {
        console.log(err)
    }))
    
    const { pathname } = req.nextUrl;

    if (!verifyToken && pathname === "/") return NextResponse.redirect(new URL('/login', req.url))

    if (!verifyToken && pathname.includes('/dashboard')) return NextResponse.redirect(new URL('/login', req.url))
    
    if (!verifyToken && pathname.includes('/leaves')) return NextResponse.redirect(new URL('/login', req.url))

    if(pathname.startsWith('/login') && !verifyToken) return;

    if(pathname.includes('/login') && verifyToken) return NextResponse.redirect(new URL('/leaves', req.url))

}

export const config = {
    matcher: ['/dashboard', '/login', '/leaves', '/']
}