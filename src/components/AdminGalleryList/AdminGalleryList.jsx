'use client';
import Image from 'next/image';

const AdminGalleryList = ({ url, onClick, isPending }) => {
  return (
    <>
      <div style={{ marginTop: '120px' }}>
        <Image src={url} alt="upload Image" width={150} height={150} priority />
        <div>
          <button type="button" onClick={onClick}>
            {isPending ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminGalleryList;
