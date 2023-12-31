// 'use client';
// import { Inter } from 'next/font/google'
import './globals.css'

// INTERNAL IMPORT
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {CrowdFundingProvider} from '../Context/CrowdFunding'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CrowdFundingProvider>
        <NavBar />
        {children}
        <Footer />
      </CrowdFundingProvider>
    </html>
  )
}

