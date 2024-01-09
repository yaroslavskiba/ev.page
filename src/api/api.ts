import { db } from '@/app/layout';
import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import 'dotenv/config';

export type Painting = {
  id: string;
  name: string;
  description: string;
  cost: string;
  url: string;
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
}

export const paintings = new Paintings();
