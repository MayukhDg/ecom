import Context from '@/context/Context'
import './globals.css'
import { Inter } from 'next/font/google';
import Provider from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <Context>
      <Provider>
      <body  className={inter.className}>{children}
      </body> 
      </Provider>
      
       </Context>
     
     
      
    </html>
  )
}
