import { db } from '@/app/layout';
import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
  doc,
  getDoc,
} from 'firebase/firestore';

export type Painting = {
  name: string;
  cost: string;
  url: string;
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

  getPainting = async (paintingId: string): Promise<Painting | null> => {
    const paintingRef = doc(db, 'paintings', paintingId);
    const snapshot = await getDoc(paintingRef);

    if (snapshot.exists()) {
      const { name, cost, url } = snapshot.data() as Painting;
      return { name, cost, url };
    }

    return null;
  };
}

export const paintings = new Paintings();
