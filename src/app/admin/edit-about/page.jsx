import AdminAbouttWorksForm from '@/src/components/AdminAboutFormWorks/AdminAboutListWorksForm';
import AdminAboutWorkList from '@/src/components/AdminAboutWorkList/AdminAboutWorkList';
import { getAllWorks } from '@/src/actions/worksAction';

const EditAboutPage = async () => {
  const { works } = await getAllWorks();
  return (
    <>
      <AdminAbouttWorksForm />
      <AdminAboutWorkList works={works} />
    </>
  );
};

export default EditAboutPage;
