'use client';

import { FormEvent, Fragment, useState } from 'react';
import {
  MButton,
  MInput,
  MTextArea,
} from '@/components/motionComponents/MotionGroupElement';

export type ContactData = {
  name: string;
  email: string;
  question: string;
  [key: string]: string;
};

type DataType = {
  name: string;
  id: string;
  custom: string;
};

const data: DataType[] = [
  { name: 'Полное имя', id: 'name', custom: '4' },
  { name: 'Номер телефона', id: 'email', custom: '5' },
];

const textAreaData: DataType = { name: 'Вопрос', id: 'question', custom: '6' };

function ContactForm() {
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    email: '',
    question: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      console.log('Response received');
      if (response.status === 200) {
        console.log('Response succeeded!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form action='submit' onSubmit={(e) => handleSubmit(e)} className='form'>
        {data.map(({ name, id, custom }: DataType) => {
          return (
            <Fragment key={name}>
              <MInput
                fc={setContactData}
                value={contactData[id]}
                placeholder={name}
                custom={Number(custom)}
                id={id}
              />
            </Fragment>
          );
        })}
        <MTextArea
          fc={setContactData}
          value={contactData[textAreaData.id]}
          placeholder={textAreaData.name}
          custom={Number(textAreaData.custom)}
          id={textAreaData.id}
        />
        <MButton nameButton={'Отправить'} />
      </form>
    </div>
  );
}

export default ContactForm;
