import { paintings } from '@/api/api';
import WallComponent from '@/components/walls/Wall.component';
import { cache } from 'react';
import { MotionMainHeader } from '@/components/motionComponents/MotionGroupElement';

const getItem = cache(async () => {
  const item = await paintings.getWalls();
  return item;
});

async function Page() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <MotionMainHeader>Декор стен</MotionMainHeader>
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
