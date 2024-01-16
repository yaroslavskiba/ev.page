import { paintings } from '@/api/api';
import PaintingComponent from '@/components/paintings/Painting.component';
import { cache } from 'react';

const getItem = cache(async () => {
  const item = await paintings.getPaintings();
  return item;
});

async function Page() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        {/* <MotionMainHeader>Картины</MotionMainHeader> */}
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
