import Image from "next/image"
import Link from "next/link"

import Logo from '/public/Logo.webp'

import { TiSocialTwitter, TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti'
export const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                
                <div className="flex flex-col gap-8 w-96 md:mx-0 mx-auto text-center md:text-left">
                    <Link href={'/'} >
                        <Image src={Logo} priority={true} alt="Site Logo" width="180"  />
                    </Link>
                    
                    <p className="mt-2 text-sm text-gray-500">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="flex flex-row gap-4">
                        <div className="bg-gray-200 rounded p-2">
                            <TiSocialTwitter size={30} color="#000000" />
                        </div>
                        <div className="bg-gray-200 rounded p-2">
                            <TiSocialLinkedin size={30} color="#000000" />
                        </div>
                        <div className="bg-gray-200 rounded p-2">
                            <TiSocialFacebook size={30} color="#000000" />
                        </div>
                        
                    </div>
                </div>
                
                
                
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Company</h2>
                        <nav className="list-none mb-10 hover:cursor-pointer flex flex-col gap-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Terms of Use</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">How it Works</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Support</h2>
                        <nav className="list-none mb-10 hover:cursor-pointer flex flex-col gap-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Support Carrer</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Contact</h2>
                        <nav className="list-none mb-10 hover:cursor-pointer flex flex-col gap-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">WhatsApp</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Support 24h</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="border-t border-black">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
                    <div className="flex-1/3">Copyright © 2022 Vemp Market</div>
                    <div className="flex-1/3">Design by. <b>mraheel</b></div>
                    <div className="flex-1/3">Code by. <b>mraheel on github</b></div>
                </div>
            </div>
        </footer>
    )
}