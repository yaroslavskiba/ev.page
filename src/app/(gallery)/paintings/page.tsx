import { paintings } from '@/api/api';
import { MotionMainHeader } from '@/components/motionComponents/MotionGroupElement';
import PaintingComponent from '@/components/paintings/Painting.component';
import Link from 'next/link';
import { cache } from 'react';
import { TbArrowBigLeftLine } from 'react-icons/tb';

const getItem = cache(async () => {
  const item = await paintings.getPaintings();
  return item;
});

async function Page() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <MotionMainHeader>
          <Link className='header-icon' href='/'>
            <TbArrowBigLeftLine />
          </Link>
          Картины
        </MotionMainHeader>
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
