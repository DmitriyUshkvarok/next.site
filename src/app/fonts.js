import {
  Permanent_Marker,
  Philosopher,
  Fredericka_the_Great,
  Montserrat,
} from 'next/font/google';

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
});

export const philosopher = Philosopher({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export const fredericka = Fredericka_the_Great({
  subsets: ['latin'],
  weight: ['400'],
});

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});
