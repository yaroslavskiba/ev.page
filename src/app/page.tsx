import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';

export default function Home() {
  return (
    <div className='container'>
      <div className='info-block'>
        <div className='split'>
          <CustomImage url='/staticImages/main1.jpeg' alt='paint' />
        </div>
        <div className='split'>
          <h1>
            <b>Lorem ipsum dolor sit amet.</b>
          </h1>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur voluptate eos consequuntur quaerat.
          </p>
          <br />
          <br />
          <p>
            Quasi dolore dolorem harum iusto? Assumenda culpa esse deserunt
            sunt, fugit necessitatibus in molestias perspiciatis reiciendis
            eveniet quam eaque voluptas accusantium molestiae! Repellendus
            deserunt explicabo, nihil atque nemo dolores dolor?
          </p>
          <br />
          <br />
          <p>
            Vel quaerat, consequatur debitis reprehenderit similique dolorum,
            sapiente quia iure laudantium et aliquid, accusamus ex cupiditate
            sequi temporibus eaque est maiores vero nemo. Cum nihil optio sint
            doloribus quod a sequi delectus.
          </p>
          <br />
          <br />
          <p>
            Numquam velit aspernatur quibusdam veniam, a quas distinctio
            expedita, doloremque repellendus blanditiis earum dolorum tenetur,
            natus soluta quis ad. Molestias a cumque nam fugiat expedita.
          </p>
        </div>
      </div>
      <div className='info-block'>
        <div className='split'>
          <h1>
            <b>Lorem ipsum dolor sit amet.</b>
          </h1>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur voluptate eos consequuntur quaerat.
          </p>
          <br />
          <br />
          <p>
            Quasi dolore dolorem harum iusto? Assumenda culpa esse deserunt
            sunt, fugit necessitatibus in molestias perspiciatis reiciendis
            eveniet quam eaque voluptas accusantium molestiae! Repellendus
            deserunt explicabo, nihil atque nemo dolores dolor?
          </p>
          <br />
          <br />
          <p>
            Vel quaerat, consequatur debitis reprehenderit similique dolorum,
            sapiente quia iure laudantium et aliquid, accusamus ex cupiditate
            sequi temporibus eaque est maiores vero nemo. Cum nihil optio sint
            doloribus quod a sequi delectus.
          </p>
          <br />
          <br />
          <p>
            Numquam velit aspernatur quibusdam veniam, a quas distinctio
            expedita, doloremque repellendus blanditiis earum dolorum tenetur,
            natus soluta quis ad. Molestias a cumque nam fugiat expedita.
          </p>
        </div>
        <div className='split'>
          <CustomImage url='/staticImages/main1.jpeg' alt='paint' />
        </div>
      </div>
    </div>
  );
}
