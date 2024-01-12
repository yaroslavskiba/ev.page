import { paintings } from '@/api/api';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getPainting(params.id);

  return <div className='container'>My Post: {data?.name}</div>;
}
