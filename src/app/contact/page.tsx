import ContactForm from '@/components/custom/contactForm/ContactForm';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

function Contact() {
  return (
    <div className='container'>
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url='/staticImages/form.jpeg' alt='form image' />
        </MDivImage>
        <div className='split'>
          <MHeader custom={2}>Связаться со мной</MHeader>
          <MParagraph custom={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            facilis quisquam dolores molestiae! Delectus perspiciatis rem amet
            quaerat! Est accusantium repellendus eveniet, nesciunt error
            doloribus?
          </MParagraph>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
