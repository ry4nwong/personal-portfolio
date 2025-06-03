import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import emailjs from '@emailjs/browser';

import NavBar from './components/nav/NavBar';
import Footer from './components/MainFooter';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

emailjs.init('JNd0vOdj2bMUV9tW9');

export const metadata: Metadata = {
  title: 'Ryan Wong: Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col items-center min-h-screen">
          <NavBar />
          <div className="flex-grow lg:mt-35 mt-25 px-10 w-full max-w-6xl mb-20">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
