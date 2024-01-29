import NavHeader from '@/components/custom/NavHeader';
import { MTitleScroll } from '@/components/motionComponents/MMainComponents';
import { MDivNav } from '@/components/motionComponents/MotionGroupElement';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const cave = Caveat({ subsets: ['cyrillic'] });

function Page() {
  return (
    <>
      <div className='container'>
        <NavHeader text='Мои работы' />
        <div className='info-block'>
          <MDivNav custom={2}>
            <Image
              style={{ objectFit: 'cover' }}
              src='/staticImages/main1.webp'
              fill
              sizes='100%'
              alt='Стены'
            />
            <Link
              href='/my-works/paintings'
              className={`gallery-nav-p ${cave.className}`}
              style={{
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '1px 2px 3px #696969',
              }}
            >
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
            <Link
              href='/my-works/walls'
              className={`gallery-nav-p ${cave.className}`}
              style={{
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '1px 2px 3px #696969',
              }}
            >
              Стены
            </Link>
          </MDivNav>
        </div>
        <MTitleScroll custom={1}>
          Будет переделываться, мне не нравится
        </MTitleScroll>
      </div>
    </>
  );
}

export default Page;
