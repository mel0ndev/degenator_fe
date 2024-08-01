import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import localFont from 'next/font/local'; 
import './globals.css';
import { Providers } from "./providers"; 
import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from '@/components/theme-provider'
//import { NextProviders } from './next-providers'

const poppins = Poppins({ 
    subsets: ['latin'], 
    variable: '--font-poppins',
    weight: ['400', '500', '600'] 
});
const openSans = Open_Sans({ 
    subsets: ['latin'],
    variable: '--font-open',
    weight: '700' 
}); 
const bukaBird = localFont({
    src: '../public/Buka Bird.ttf',
    variable: '--font-bb',
    display: 'swap',
}); 

export const metadata: Metadata = {
  title: 'Degenator',
  description: 'Degenator Staking Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className="scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable} ${bukaBird.variable}`}>
          <Providers> 
            <ThemeProvider 
            defaultTheme="dark"
            >
            {children}
            </ThemeProvider>
          </Providers> 
      </body>
    </html>
  );
}
