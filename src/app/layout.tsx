import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Navigation from './components/navigation'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Fullstack Web App',
    description: 'A fullstack web application built with Next.js',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-gutter-stable`}
        >
            <body className="max-w-5xl mx-auto bg-zinc-900 text-zinc-50">
                <div className="min-h-dvh flex flex-col gap-8 p-8">
                    <Navigation />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
