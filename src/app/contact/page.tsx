import ContactForm from '@/components/custom/contactForm/ContactForm';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';
import SocialPersonalButtons from '@/components/custom/customComponents/SocialPersonal';

function Contact() {
  return (
    <main style={{ display: 'contents' }}>
      <div className='container'>
        <section className='info-block'>
          <MDivImage custom={1}>
            <CustomImage url='/staticImages/form.jpeg' alt='form image' />
          </MDivImage>
          <div className='split'>
            <MHeader custom={2}>Связаться со мной</MHeader>
            <MParagraph custom={3}>
              Для связи со мной вы можете использовать эту форму, либо{' '}
              <a
                className='text-link'
                href='https://t.me/Ev_Cath_helper_bot'
                target='blank'
              >
                телеграм бота
              </a>
              . Я постараюсь ответить в ближайшее время!
            </MParagraph>
            <SocialPersonalButtons />
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
