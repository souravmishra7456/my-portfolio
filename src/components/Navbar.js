'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' }
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
            <div className="text-xl font-bold">My Portfolio</div>
            <ul className="flex gap-6">
                {links.map(link => (
                    <li key={link.name}>
                        <Link
                            href={link.path}
                            className={`hover:text-teal-400 ${pathname === link.path ? 'text-teal-300 font-semibold' : ''}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
