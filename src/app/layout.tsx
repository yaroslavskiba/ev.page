import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/header/Navigation';

const exo = Exo_2({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'ev.cath - Художник и Декоратор стен',
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
      <body className={exo.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
