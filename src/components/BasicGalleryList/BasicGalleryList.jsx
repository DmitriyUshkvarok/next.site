import Image from 'next/image';

const BasicGalleryList = ({ photos }) => {
  return (
    <>
      <ul>
        {photos?.map((item) => (
          <li key={item?.public_id}>
            <Image
              src={item?.secure_url}
              alt="photo admin"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BasicGalleryList;
