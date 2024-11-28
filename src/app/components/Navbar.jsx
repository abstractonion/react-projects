import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <ul className="hidden md:flex flex-row justify-between items-center bg-blue-700 text-white h-16 font-regular capitalize px-4">
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
    </nav>
  )
}
