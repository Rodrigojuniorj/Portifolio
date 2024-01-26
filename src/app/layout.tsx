import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Navbar } from "@/components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Footer } from '@/components/Footer';

const roboto = Roboto({ weight: ['400', '700'], preload: false })

export const metadata: Metadata = {
  title: 'Portifólio - Rodrigo Tavares Franco Junior',
  description: 'Meu portifólio usando Next.js 14, api routes e tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased scroll-smooth">
      <body className={`${roboto.className}  overflow-x-hidden`}>
        <div className='w-screen h-full bg-background'>
          <div className='px-4 xl:px-0 max-w-5xl m-auto overflow-x-hidden'>
            <Navbar />
            <main className="bg-background pb-10 pt-8 w-6xl">{children}</main>
            <Footer />
          </div>
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={false}
          draggable={true}
          theme="dark"
        />
      </body>
    </html>
  )
}
