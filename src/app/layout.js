import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal website portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
