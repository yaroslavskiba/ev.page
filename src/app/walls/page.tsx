import { paintings } from '@/api/api';
import WallComponent from '@/components/walls/Wall.component';
import { cache } from 'react';

const getItem = cache(async () => {
  const item = await paintings.getWalls();
  return item;
});

async function WallsComponent() {
  const data = await getItem();

  return (
    <>
      <div className='container'>
        <h1>&#0;</h1>
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

export default WallsComponent;
