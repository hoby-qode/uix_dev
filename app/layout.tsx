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
  },
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67766b7649e2fd8dfe019b0b/1igj97i2n';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
