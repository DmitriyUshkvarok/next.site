import PageTransition from '@/src/components/PageTransition/PageTransition';

import ContactsContent from '@/src/components/ContactsContent/ContactsContent';

export const metadata = {
  title: 'Contact Page | My Site Portfolio Contact',
  description:
    'web developer Dmitriy Ushkvarok,welcome to my contact page Dmitriy Ushkvarok',
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
