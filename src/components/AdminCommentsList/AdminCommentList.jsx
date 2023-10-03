import { getAllCommentsForAdmin } from '@/src/actions/commentActions';
import AdminCommentsItem from '../AdminCommentsItems/AdminCommentsItem';

const AdminCommentList = async () => {
  const { comments } = await getAllCommentsForAdmin();
  return (
    <>
      <AdminCommentsItem comments={comments} />
    </>
  );
};

export default AdminCommentList;
