import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Navbar, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'Preço Mestre',
  description: 'Preço Mestre - O melhor preço da internet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar />
        {children}
        <Footer />
        </main>
        </body>
    </html>
  )
}
