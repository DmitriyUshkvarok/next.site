import AdminAboutWorkItem from '../AdminAboutWorkItem/AdminAboutWorkItem';

const AdminAboutWorkList = ({ works }) => {
  return (
    <ul>
      <AdminAboutWorkItem works={works} />
    </ul>
  );
};

export default AdminAboutWorkList;
