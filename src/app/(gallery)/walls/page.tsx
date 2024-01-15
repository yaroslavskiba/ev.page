import { paintings } from '@/api/api';
import WallComponent from '@/components/walls/Wall.component';
import { cache } from 'react';
import { MotionMainHeader } from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';
import { TbArrowBigLeftLine } from 'react-icons/tb';

const getItem = cache(async () => {
  const item = await paintings.getWalls();
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
          Стены
        </MotionMainHeader>
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
      </div>
    </>
  );
}

export default Page;
