import dynamic from 'next/dynamic';

const PageTransition = dynamic(() =>
  import('@/src/components/PageTransition/PageTransition')
);

const ContactsContent = dynamic(() =>
  import('@/src/components/ContactsContent/ContactsContent')
);

const Contacts = () => {
  return (
    <>
      <PageTransition>
        <ContactsContent />
      </PageTransition>
    </>
  );
};

export default Contacts;
