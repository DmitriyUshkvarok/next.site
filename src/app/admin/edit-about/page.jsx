import AdminAbouttWorksForm from '@/src/components/Admin/AdminAboutFormWorks/AdminAboutListWorksForm';
import AdminAboutWorkList from '@/src/components/Admin/AdminAboutWorkList/AdminAboutWorkList';
import { getAllWorks } from '@/src/actions/worksAction';

const EditAboutPage = async () => {
  const { works } = await getAllWorks();
  return (
    <>
      <h1 className="hiddenTitle">Admin Edit User</h1>
      <AdminAbouttWorksForm />
      <AdminAboutWorkList works={works} />
    </>
  );
};

export default EditAboutPage;
