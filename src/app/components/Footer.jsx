import React from 'react'
import Link from 'next/link'
import { FaRegEnvelope, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className= "bg-blue-300 text-black h-[16vh] flex flex-col items-center justify-center text-2xs">
        <p>design + dev &copy; <Link href = "https://x.com/abstractoion" className='hover:font-bold'>caleb uzuegbunam</Link>, {currentYear}</p>
        <div className='flex flex-col gap-2 items-center'>
            <h2>reach out to us on:</h2>
            <ul className='flex flex-row gap-4'>
                <li><Link href={'#'}>
                <FaInstagram />
                </Link></li>

                <li><Link href={'#'}>
                <FaRegEnvelope />
                </Link></li>

                 <li><Link href={'#'}>
                <FaGithub />
                </Link></li>
            </ul>
        </div>
    </footer>
  )
}
