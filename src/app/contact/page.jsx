import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import ContactsContent from '@/src/components/ContactsContent/ContactsContent';

const Contacts = () => {
  return (
    <>
      <PageTransition>
        <ButtonBack />
        <ContactsContent />
      </PageTransition>
    </>
  );
};

export default Contacts;
