import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
  getDoc,
  doc,
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

export type Walls = {
  id: string;
  type: string;
  cost: string;
  url: string;
};

type SendMailType = {
  name: string;
  email: string;
  question: string;
};

interface UnionInterface {
  getPaintings?: () => Promise<Painting[]>;
  getPainting?: (id: string) => Promise<Painting>;
  getWalls?: () => Promise<Walls[]>;
  getWall?: (id: string) => Promise<Walls>;
}

class Paintings implements UnionInterface {
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

  getPainting = async (id: string): Promise<Painting> => {
    const paintingRef = doc(db, 'paintings', id);
    const snapshot = await getDoc(paintingRef);

    if (!snapshot.exists()) {
      return { id: '', name: '', description: '', cost: '', url: '' };
    }
    const { name, description, cost, url } = snapshot.data();
    return { id, name, description, cost, url };
  };

  getWalls = async (): Promise<Walls[]> => {
    const paintingsRef = collection(db, 'walls');
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(paintingsRef);
    const walls: Walls[] = [];

    snapshot.forEach((doc) => {
      const { type, cost, url, id } = doc.data();
      walls.push({ type, cost, url, id });
    });
    return walls;
  };

  getWall = async (id: string): Promise<Walls> => {
    const wallRef = doc(db, 'walls', id);
    const snapshot = await getDoc(wallRef);

    if (!snapshot.exists()) {
      return { type: '', cost: '', url: '', id: '' };
    }
    const { type, cost, url } = snapshot.data();
    return { id, type, cost, url };
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
        subject: `Вопрос с сайта от ${name} номер телефона ${email}`,
        text: `Имя пользователя: ${name}
Номер телефона: ${email}
Вопрос: ${question}`,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
    }
  };
}

export const paintings = new Paintings();
