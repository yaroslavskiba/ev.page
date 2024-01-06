import { paintings } from '@/api/api';
import PaintingComponent from '@/components/Painting.component';

export default async function Home() {
  const data = await paintings.getPaintings();

  return (
    <div className='container bg-grey'>
      {data.map(({ name, cost, url }) => {
        return (
          <PaintingComponent key={name} name={name} cost={cost} url={url} />
        );
      })}
    </div>
  );
}
