import { paintings } from '@/api/api';
import WallComponent from '@/components/walls/Wall.component';
import { Suspense, cache } from 'react';
import { MotionMainHeader } from '@/components/motionComponents/MotionGroupElement';
import Loading from '../loading';

const getItem = cache(async () => {
  const item = await paintings.getWalls();
  return item;
});

async function Component() {
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

function WallsComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}

export default WallsComponent;
