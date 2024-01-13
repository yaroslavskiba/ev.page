import { paintings } from '@/api/api';
import { MHeader } from '@/components/motionComponents/MotionGroupElement';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getWall(params.id);

  return (
    <div className='container'>
      <MHeader custom={1}>{data?.type}</MHeader>.
    </div>
  );
}
