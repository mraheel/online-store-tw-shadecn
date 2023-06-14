import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"
import Link from 'next/link'
import Logo from '/public/Logo.webp'

export const NavBar = () => {
    return (
        <header className="flex mx-32 my-8 items-center justify-between">
            <Link href={'/'}>
                <Image src={Logo} priority={true} alt="Site Logo" width="150" />
            </Link>
            <nav className="flex items-center justify-center space-x-8">
                <Link href={'/male'} className="cursor-pointer font-medium">Male</Link>
                <Link href={'/female'} className="cursor-pointer font-medium">Female</Link>
                <Link href={'/kids'} className="cursor-pointer font-medium">Kids</Link>
                <Link href={'/products'} className="cursor-pointer font-medium">All Products</Link>
            </nav>

            <div className="flex text-gray-600 border-2 border-gray-300 bg-white rounded-lg w-96">
                <Search className="m-2" />
                <input className="h-10 mx-2 w-full focus:outline-none" type="search" name="search" placeholder="Search" />
            </div>

            <button className="rounded-full">
                <span className="absolute top-6 right-23 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">0</span>
                <ShoppingCart className="relative" />
            </button>
            
            {/* <div className="p-2 rounded-full bg-gray-300">
                
                <ShoppingCart className="relative" />
                <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">0</span>
            </div> */}
        </header>
    )
}