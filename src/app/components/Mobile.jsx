"use client"

import Link from 'next/link'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Mobile() {
    const pageTitle = ["Home"]
    const [open, setOpen] = useState(false)
    //Mobile.displayName = "Mobile"; // Explicitly define the display name

    function handleNav(){
        setOpen(!open)
    }

  return (
    <div className="md:hidden">
        <ul className="flex flex-row justify-between items-center bg-blue-700 text-white h-12 font-regular capitalize px-4">
            <li><Link href={'/'}>{pageTitle}</Link></li>
            <li onClick={handleNav} className='cursor-pointer'><GiHamburgerMenu/></li>
        </ul>

        {open &&
            <ul className="flex flex-col justify-between items-center bg-blue-700 text-white h-16 font-regular capitalize px-4">
            <Link href="/">
            <li>Home</li>
            </Link>

            <Link href="/about">
            <li>About</li>
            </Link>

            <Link href="/categories">
            <li>Categories</li>
            </Link>

            <Link href="/shop">
            <li>Shop</li>
            </Link>

            <Link href="/contact">
            <li>Contact</li>
            </Link>

            <Link href="/sign-up">
            <li>Create Account</li>
            </Link>
        </ul>
        }
    </div>
  )
}
