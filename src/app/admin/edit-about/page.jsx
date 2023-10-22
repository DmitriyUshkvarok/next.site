import AdminAbouttWorksForm from '@/src/components/AdminAboutListWorks/AdminAboutListWorksForm';
import { getAllWorks } from '@/src/actions/worksAction';

const EditAboutPage = async () => {
  const { works } = await getAllWorks();
  return (
    <>
      <AdminAbouttWorksForm />
    </>
  );
};

export default EditAboutPage;
