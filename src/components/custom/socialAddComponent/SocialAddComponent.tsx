import SocialButtons from '@/components/header/SocialButtons';
import {
  MDiv,
  MLink,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

function SocialAddComponent({ start }: { start: number }) {
  return (
    <div className='split' style={{ maxWidth: '90%' }}>
      <MParagraph custom={start}>
        <i>Познакомиться с моим творчеством вы можете в социальных сетях:</i>
      </MParagraph>
      <MDiv custom={start + 1}>
        <SocialButtons />
      </MDiv>
      <MParagraph custom={start + 2}>
        <i>
          Купить картину, задать вопрос по моей работе или обсудить
          индивидуальный заказ можно по ссылке ниже
        </i>
      </MParagraph>
      <i>
        <MLink custom={start + 3} href='https://t.me/Ev_Cath_helper_bot'>
          Оформить | Заказать
        </MLink>
      </i>
    </div>
  );
}

export default SocialAddComponent;
