import { Metadata } from 'next'

import React from 'react'
import FontFamily from './fontFamily'
import Theme from '@/src/theme/theme'
import '@/styles/app.css'
import Footer from '@/src/features/layout/Footer'
import Header from '@/src/features/layout/Header'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  verification: {
    google: "VMtBT6bUjPi5vgrhOPcAcNcauAERZEDq-OmariuuxiI"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <FontFamily />
      <body>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
        <GoogleTagManager gtmId="GTM-MHPD58CZ" />
      </body>
    </html>
  )
}
