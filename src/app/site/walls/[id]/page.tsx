import { paintings } from '@/api/api';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getWall(params.id);

  return <div className='container'>My Post: {data?.type}</div>;
}
