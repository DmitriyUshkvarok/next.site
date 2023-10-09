import Image from 'next/image';

const AdminGalleryList = ({ url, onClick }) => {
  return (
    <>
      <div style={{ marginTop: '120px' }}>
        <Image src={url} alt="upload Image" width={150} height={150} priority />
        <button type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    </>
  );
};

export default AdminGalleryList;
