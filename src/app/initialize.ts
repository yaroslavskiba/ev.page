import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: 'ev-cath-tg-bot.firebaseapp.com',
  databaseURL:
    'https://ev-cath-tg-bot-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ev-cath-tg-bot',
  storageBucket: 'ev-cath-tg-bot.appspot.com',
  messagingSenderId: '648508453377',
  appId: '1:648508453377:web:b2fa7ba7beef40893fc600',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
