import { Metadata } from 'next'

import React from 'react'
import FontFamily from './fontFamily'
import Theme from '@/src/theme/theme'
import '@/styles/app.css'
import Footer from '@/src/features/layout/Footer'
import Header from '@/src/features/layout/Header'

export const metadata: Metadata = {
  title: 'Titre de la page',
  description: 'Description de la page',
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
      </body>
    </html>
  )
}
