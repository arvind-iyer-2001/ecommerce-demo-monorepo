import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center h-full w-full">
        {children}
    </div>
  )
}
