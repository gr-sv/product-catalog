import "./globals.scss";
import { Arimo } from 'next/font/google';

const arimo = Arimo({
	subsets: ['latin'],
  	display: 'swap',
	variable: '--font-arimo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={arimo.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
