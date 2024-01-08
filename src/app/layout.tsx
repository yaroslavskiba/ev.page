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
    'Ev.Cath - талантливая художница и декоратор стен, специализирующаяся на создании уникальных произведений и декорации помещений. Она предлагает широкий спектр услуг, включая нарисованные картины растений, индивидуальные заказы и кастомизацию стен. Ev.Cath создает потрясающие работы и владеет техниками работы с различными материалами, включая камень и мрамор. Обращаясь к Ev.Cath, чтобы заказать уникальную картину или услуги по декорированию стен, вы придаете вашему дому неповторимый стиль и эстетическую привлекательность. Ev.Cath is a talented artist and wall decorator specializing in creating unique artworks and enhancing interior spaces. With a wide range of services, including hand-painted plant paintings, custom orders, and wall customization, Ev.Cath brings creativity and style to every project. Utilizing various materials, such as stone and marble, Ev.Cath crafts stunning pieces that transform walls into works of art. By commissioning a one-of-a-kind painting or availing of wall decoration services from Ev.Cath, you can elevate the aesthetic appeal of your home with a touch of originality and artistic flair.',
  keywords: [
    'Ev.Cath',
    'artist',
    'wall decorator',
    'paintings',
    'sculptures',
    'artistry',
    'plant paintings',
    'custom artwork',
    'wall decoration',
    'rock formations',
    'marble finishes',
    'wall customization',
    'художник',
    'декоратор стен',
    'картины',
    'скульптуры',
    'искусство',
    'картины растений',
    'индивидуальный заказ',
    'декорация стен',
    'скалы на стенах',
    'мрамор на стенах',
    'кастомизация стен',
  ],
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
