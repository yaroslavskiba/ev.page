import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/header/Navigation';

const tektur = Tektur({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ev.Cath - Artist and Wall Decorator',
  description:
    'Впустите в свою жизнь искусство выдающегося художника и мастера декора стен Ev.Cath. Откройте для себя впечатляющие работы и уникальные дизайны, которые преобразят ваше пространство и добавят ему неповторимости.',
  keywords: ['Ev.Cath', 'художник', 'декоратор стен', 'искусство', 'картина'],
  robots: 'index,follow',
};

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
