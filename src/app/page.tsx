import { MDivNav } from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';

function Page() {
  return (
    <>
      <div className='container'>
        <div className='info-block'>
          <MDivNav custom={1} bg={'./staticImages/form.jpeg'}>
            <Link href='/paintings' className='gallery-nav-p'>
              Картины
            </Link>
          </MDivNav>
          <MDivNav custom={1} bg={'./staticImages/main1.jpeg'}>
            <Link href='/walls' className='gallery-nav-p'>
              Стены
            </Link>
          </MDivNav>
        </div>
      </div>
    </>
  );
}

export default Page;
