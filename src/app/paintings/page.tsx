import { paintings } from '@/api/api';
import PaintingComponent from '@/components/paintings/Painting.component';

async function PaintingsComponent() {
  const data = await paintings.getPaintings();

  return (
    <>
      <div className='gallery-container'>
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

export default PaintingsComponent;
