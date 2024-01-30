import { paintings } from '@/api/api';
import NavHeader from '@/components/custom/NavHeader';
import PaintingComponent from '@/components/paintings/Painting.component';
import { Metadata } from 'next';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'ev.cath - Картины',
  description:
    'Картины ev.cath из города Минска. Тут представлены картины с их описанием, среди которых вы сможете выбрать именно то, что нужновам и вашему дому',
  keywords: [
    'ev.cath',
    'купить картину',
    'объемная картина',
    'Минск',
    'художник Минск',
  ],
};

const getItem = cache(async () => {
  const item = await paintings.getPaintings();
  return item;
});

async function Page() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <NavHeader text='Мои работы - картины' />
        {data.map(({ name, description, cost, url, id }) => {
          return (
            <PaintingComponent
              key={name}
              name={name}
              description={description}
              cost={cost}
              url={url}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Page;
