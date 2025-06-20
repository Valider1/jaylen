// ── app/layout.tsx ──
import './globals.css'
import Navbar from './components/Navbar'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'My Cool Site',
  description: 'Built with Next.js & Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
