import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import Logo from "../public/Rslogo.png"
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";


function Footer() {
    const router: NextRouter = useRouter()
	return (
		<>
			<div className="bg-gradient-to-b from-white via-white to-orange-300 h-auto w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="flex items-center justify-center text-orange-500 font-bold text-3xl pb-6">
                            <Image className="mr-2" width={50} height={50} src={Logo} alt="company logo" /> 
                            Ratchasima Witthayalai<span className="text-gray-800 ml-2">School</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram onClick={() => router.push("https://www.instagram.com/fakbok_rajsima/")} className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter onClick={() => router.push("https://twitter.com/search?q=%23rsfact&src=typed_query&f=live")} className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube onClick={() => router.push("https://youtu.be/Qjqz6QC_t6E")} className="text-2xl cursor-pointer hover:text-red-600" />
							<FaFacebook onClick={() => router.push("https://www.facebook.com/PR.RajsimaWittayalai")} className="text-2xl cursor-pointer hover:text-blue-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Developers</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            👑 Suthang Sukrueangkun 👑
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-orange-300 flex flex-col justify-center items-center text-center p-5 bg-gray-50">
				<h1 className="text-gray-800 font-semibold">
					© 2021-2022 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Suthang Sukrueangkun{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;