import React from 'react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className= "bg-blue-300 text-black h-[5vh] flex flex-col items-center justify-center text-2xs">
        <p>design + dev &copy; <Link href = "https://x.com/abstractoion" className='hover:font-bold'>caleb uzuegbunam</Link>, {currentYear}</p>
    </footer>
  )
}
