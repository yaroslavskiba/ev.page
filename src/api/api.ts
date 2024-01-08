import { db } from '@/app/layout';
import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export type Painting = {
  name: string;
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
  getPainting?: (paintingId: string) => Promise<Painting | null>;
}

class Paintings implements PaintingInterface {
  getPaintings = async (): Promise<Painting[]> => {
    const paintingsRef = collection(db, 'paintings');
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(paintingsRef);
    const paintings: Painting[] = [];

    snapshot.forEach((doc) => {
      const { name, cost, url } = doc.data();
      paintings.push({ name, cost, url });
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
