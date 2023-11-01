import ReduxProvider from '../redux/ReduxProvider/Provider';
import LocalesProvider from '../locales/LocalesProvider/LocalesProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import NextAuthProvider from '../context/provider';
import Container from '../components/Container/Container';
import Copyright from '../components/Copyright/Copyright';
import UnderConstructionModal from '../components/Gallery/UnderConstructionModal/UnderConstructionModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://my-site-portfolio-three.vercel.app/'),
  title: 'My Site Portfolio | Dmitriy Ushkvarok',
  description:
    'site about web developer Dmitriy Ushkvarok,portfolio,about,gallery,contacts',
  generator: 'Next.js',
  applicationName: 'My Web Site Dmitriy Ushkvarok',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Redux',
    'Dmitriy Ushkvarok',
    'Site Portfolio',
    'fullstack app on Next js',
    'server action',
  ],
  authors: [
    { name: 'Dmitriy Ushkvarok', url: 'my-site-portfolio-three.vercel.app/' },
  ],
  creator: 'Dmitriy Ushkvarok',
  publisher: 'Dmitriy Ushkvarok',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'My Site Portfolio | Dmitriy Ushkvarok',
    description:
      'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
    images: [
      {
        url: '/opengraph.png',
        width: 400,
        height: 300,
      },
    ],
  },
  verification: {
    google: 'AOjUnX-0ZVriCXmOY7_0Qkj2Me_F9HO3-IoLSjmde44',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="fixedBlockForIos"></div>
        <NextAuthProvider>
          <LocalesProvider>
            <ReduxProvider>
              <Container>
                <Header />
                <UnderConstructionModal />
                <main> {children}</main>
              </Container>
              <Copyright />
            </ReduxProvider>
          </LocalesProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
