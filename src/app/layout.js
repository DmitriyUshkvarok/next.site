import ReduxProvider from '../redux/ReduxProvider/Provider';
import LocalesProvider from '../locales/LocalesProvider/LocalesProvider';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import NextAuthProvider from '../context/provider';
import Container from '../components/Container/Container';
import Copyright from '../components/Copyright/Copyright';
import UnderConstructionModal from '../components/UnderConstructionModal/UnderConstructionModal';

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
      'My site portfolio, web developer Dmitriy Ushkvarok,portfolio,about,gallery,contacts',
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
                <div className="container">
                  <main> {children}</main>
                </div>
              </Container>
              <Copyright />
            </ReduxProvider>
          </LocalesProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
