import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

export default function Home() {
  return (
    <div className='container'>
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url='/staticImages/main1.jpeg' alt='paint' />
        </MDivImage>
        <div className='split'>
          <MHeader custom={2}>
            <b>Lorem ipsum dolor sit amet.</b>
          </MHeader>
          <br />
          <MParagraph custom={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur voluptate eos consequuntur quaerat.
          </MParagraph>
          <br />
          <br />
          <MParagraph custom={4}>
            Quasi dolore dolorem harum iusto? Assumenda culpa esse deserunt
            sunt, fugit necessitatibus in molestias perspiciatis reiciendis
            eveniet quam eaque voluptas accusantium molestiae! Repellendus
            deserunt explicabo, nihil atque nemo dolores dolor?
          </MParagraph>
          <br />
          <br />
          <MParagraph custom={5}>
            Vel quaerat, consequatur debitis reprehenderit similique dolorum,
            sapiente quia iure laudantium et aliquid, accusamus ex cupiditate
            sequi temporibus eaque est maiores vero nemo. Cum nihil optio sint
            doloribus quod a sequi delectus.
          </MParagraph>
          <br />
          <br />
          <MParagraph custom={6}>
            Numquam velit aspernatur quibusdam veniam, a quas distinctio
            expedita, doloremque repellendus blanditiis earum dolorum tenetur,
            natus soluta quis ad. Molestias a cumque nam fugiat expedita.
          </MParagraph>
        </div>
      </section>
    </div>
  );
}
