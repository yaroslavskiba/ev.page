import NavHeader from '@/components/custom/NavHeader';
import { MTitleScroll } from '@/components/motionComponents/MMainComponents';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const cave = Caveat({ subsets: ['cyrillic'] });

function Page() {
  return (
    <div className='container'>
      <NavHeader text='Мои работы' />
      <div className='info-block'></div>
      <MTitleScroll custom={1}>
        Будет переделываться, мне не нравится
      </MTitleScroll>
    </div>
  );
}

export default Page;
