import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';
import './globals.css';
import { initializeApp } from 'firebase/app';
import 'dotenv/config';
import { getFirestore } from 'firebase/firestore';
import Navigation from '@/components/header/Navigation';

const tektur = Tektur({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ev.Cath - Artist and Wall Decorator',
  description:
    'Впустите в свою жизнь искусство выдающегося художника и мастера декора стен Ev.Cath. Откройте для себя впечатляющие работы и уникальные дизайны, которые преобразят ваше пространство и добавят ему неповторимости.',
  keywords: ['Ev.Cath', 'художник', 'декоратор стен', 'искусство', 'картина'],
  robots: 'index,follow',
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
      <link rel='icon' href='/icon.ico' />
      <body className={tektur.className}>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
