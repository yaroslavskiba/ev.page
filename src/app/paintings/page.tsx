import { paintings } from '@/api/api';
import PaintingComponent from '@/components/paintings/Painting.component';

async function PaintingsComponent() {
  const data = await paintings.getPaintings();

  return (
    <>
      <div className='gallery-container'>
        <div className='line'></div>
        {data.map(({ name, cost, url }) => {
          return (
            <PaintingComponent key={name} name={name} cost={cost} url={url} />
          );
        })}
      </div>
    </>
  );
}

export default PaintingsComponent;
