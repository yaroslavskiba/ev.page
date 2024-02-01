import NavHeader from '@/components/custom/NavHeader';
import { MTitleScroll } from '@/components/motionComponents/MMainComponents';
import Link from 'next/link';

function Page() {
  return (
    <div className='container'>
      <NavHeader text='Мои работы' />
      <div className='info-block'></div>
      <MTitleScroll custom={1}>
        Будет переделываться, мне не нравится
        <Link href={'/my-works/paintings'} as={'/my-works/paintings'}>
          Картины
        </Link>
        <Link href={'/my-works/walls'} as={'/my-works/walls'}>
          Стены
        </Link>
      </MTitleScroll>
    </div>
  );
}

export default Page;
