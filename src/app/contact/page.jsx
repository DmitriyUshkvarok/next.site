import PageTransition from '@/src/components/PageTransition/PageTransition';

import ContactsContent from '@/src/components/ContactsContent/ContactsContent';

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
