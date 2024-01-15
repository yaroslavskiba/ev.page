import SocialButtons from '@/components/header/SocialButtons';
import {
  MDiv,
  MLink,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

function SocialAddComponent({ start }: { start: number }) {
  return (
    <div className='split'>
      <MParagraph custom={start}>
        Познакомиться с моим творчеством в моих социальных сетях:
      </MParagraph>
      <MDiv custom={start + 1}>
        <SocialButtons />
      </MDiv>
      <MParagraph custom={start + 2}>
        Купить картину, задать вопрос по моей работе или обсудить индивидуальный
        заказ можно по ссылке ниже
      </MParagraph>
      <MLink custom={start + 3} href='https://t.me/Ev_Cath_helper_bot'>
        Оформить | Заказать
      </MLink>
    </div>
  );
}

export default SocialAddComponent;
