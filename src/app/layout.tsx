// Root Layout

import './global.css';
import React from 'react';
import ChakraWrapper from '@/chakraWrapper/Chakra';
import Header from '@/appComponents/header/Header';
import Footer from '@/appComponents/footer/Footer';

export const metadata = {
  title: 'Panaverse Dao',
  description: 'Panaverse Dao App Created Using Next and Chakra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ChakraWrapper>
          <div className='body'>
            <div>
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ChakraWrapper>
      </body>
    </html>
  );
}
