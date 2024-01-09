import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import 'dotenv/config';
import { db } from '@/app/initialize';
import nodemailer from 'nodemailer';

export type Painting = {
  id: string;
  name: string;
  description: string;
  cost: string;
  url: string;
};

type SendMailType = {
  name: string;
  email: string;
  question: string;
};

interface PaintingInterface {
  getPaintings?: () => Promise<Painting[]>;
}

class Paintings implements PaintingInterface {
  getPaintings = async (): Promise<Painting[]> => {
    const paintingsRef = collection(db, 'paintings');
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(paintingsRef);
    const paintings: Painting[] = [];

    snapshot.forEach((doc) => {
      const { name, description, cost, url, id } = doc.data();
      paintings.push({ name, description, cost, url, id });
    });

    return paintings;
  };

  sendMail = async ({ name, email, question }: SendMailType) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_TO_SEND}`,
          pass: `${process.env.MAILER_PASSWORD}`,
        },
      });

      let mailOptions = {
        from: `${process.env.EMAIL_TO_SEND}`,
        to: `${process.env.EMAIL_TO_GET}`,
        subject: `Вопрос с сайта от ${name} почта ${email}`,
        text: `Имя пользователя: ${name}
Почта: ${email}
Вопрос: ${question}`,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
    }
  };
}

export const paintings = new Paintings();
