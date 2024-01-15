import {
  MDivNav,
  MHeader,
} from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';

function Page() {
  return (
    <>
      <div className='container'>
        <MHeader center={true} custom={1}>
          Галерея:
        </MHeader>
        <div className='info-block'>
          <MDivNav custom={2} bg={'./staticImages/form.webp'}>
            <Link href='/paintings' className='gallery-nav-p'>
              Картины
            </Link>
          </MDivNav>
          <MDivNav custom={3} bg={'./staticImages/main1.webp'}>
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
