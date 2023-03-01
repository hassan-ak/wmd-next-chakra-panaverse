// Root Layout

import ChakraWrapper from '@/chakraWrapper/Chakra';

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
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
