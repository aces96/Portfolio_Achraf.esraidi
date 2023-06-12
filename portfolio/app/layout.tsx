import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Achraf Esraidi',
  description: 'fullstack developer, nextjs, reactjs, nodejs developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script onLoad={()=>{
        console.log('loaded')
      }} src="https://smtpjs.com/v3/smtp.js" />
    </html>
  )
}
