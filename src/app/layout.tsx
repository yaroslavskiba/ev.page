import type { Metadata } from 'next';
import { Montserrat, Tektur } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/header/Navigation';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ev.cath - Artist and Wall Decorator',
  description:
    'Впустите в свою жизнь искусство выдающегося художника и мастера декора стен ev.cath. Откройте для себя впечатляющие работы и уникальные дизайны, которые преобразят ваш дом и добавят ему неповторимость.',
  keywords: ['ev.cath', 'художник', 'декоратор стен', 'искусство', 'картина'],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  authors: [{ name: 'yaroslavskiba' }],
  generator: 'Художник',
  creator: 'yaroslavskiba',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <link rel='icon' href='/icon.ico' />
      <body className={mont.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
