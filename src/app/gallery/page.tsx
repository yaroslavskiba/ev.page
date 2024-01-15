import {
  MDivNav,
  MHeader,
} from '@/components/motionComponents/MotionGroupElement';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <>
      <div className='container'>
        <MHeader center={true} custom={1}>
          Галерея:
        </MHeader>
        <div className='info-block'>
          <MDivNav custom={2}>
            <Image
              style={{ objectFit: 'cover' }}
              src='/staticImages/main1.webp'
              fill
              sizes='100%'
              alt='Стены'
            />
            <Link href='/gallery/paintings' className='gallery-nav-p'>
              Картины
            </Link>
          </MDivNav>
          <MDivNav custom={3}>
            <Image
              style={{ objectFit: 'cover' }}
              src='/staticImages/form.webp'
              fill
              sizes='100%'
              alt='Стены'
            />
            <Link href='/gallery/walls' className='gallery-nav-p'>
              Стены
            </Link>
          </MDivNav>
        </div>
      </div>
    </>
  );
}

export default Page;
