import PageTransition from '@/src/components/PageTransition/PageTransition';

import ContactsContent from '@/src/components/ContactsContent/ContactsContent';

export const metadata = {
  title: 'Contact Page | My Site Portfolio Contact',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const Contacts = () => {
  return (
    <>
      <PageTransition>
        <h1 className="hiddenTitle">Contact Page</h1>
        <ContactsContent />
      </PageTransition>
    </>
  );
};

export default Contacts;
