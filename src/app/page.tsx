import { paintings } from '@/api/api';
import PaintingComponent from '@/components/paintings/Painting.component';
import { Suspense, cache } from 'react';

import { MotionMainHeader } from '@/components/motionComponents/MotionGroupElement';
import Loading from './loading';

const getItem = cache(async () => {
  const item = await paintings.getPaintings();
  return item;
});

async function Component() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <MotionMainHeader>Картины</MotionMainHeader>
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

function PaintingsComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}

export default PaintingsComponent;
