import { paintings } from '@/api/api';
import NavHeader from '@/components/custom/NavHeader';
import WallComponent from '@/components/walls/Wall.component';
import { Metadata } from 'next';
import Link from 'next/link';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'ev.cath - Декор стен',
  description:
    'Декор стен от ev.cath из города Минска. Тут представлены примеры выполненных работ с подробным описанием. По этим примерам вы можете убедиться в профессионализме ev.cath и выбрать уникальный декор для вас и вашего дома',
  keywords: [
    'ev.cath',
    'декор стен',
    'декор стен Минск',
    'мрамор на стене',
    'стены',
    'скалы',
    'декор инерьера Минск',
  ],
};

const getItem = cache(async () => {
  const item = await paintings.getWalls();
  return item;
});

async function Page() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <NavHeader text='Мои работы - Стены' />

        {data.map(({ type, cost, url, id }) => {
          return (
            <WallComponent
              key={type}
              type={type}
              cost={cost}
              url={url}
              id={id}
            />
          );
        })}
        <Link as='paintings' href='/my-works/paintings'>
          Картины
        </Link>
      </div>
    </>
  );
}

export default Page;
