import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { initializeApp } from 'firebase/app';
import 'dotenv/config';
import { getFirestore } from 'firebase/firestore';
import Navigation from '@/components/header/Navigation';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistry Unveiled',
  description: 'Experience the Splendor of Visual Masterpieces',
  keywords: ['art', 'gallery', 'paintings', 'sculptures', 'artistry'],
};

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: 'ev-cath-tg-bot.firebaseapp.com',
  databaseURL:
    'https://ev-cath-tg-bot-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ev-cath-tg-bot',
  storageBucket: 'ev-cath-tg-bot.appspot.com',
  messagingSenderId: '648508453377',
  appId: '1:648508453377:web:b2fa7ba7beef40893fc600',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={mont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
