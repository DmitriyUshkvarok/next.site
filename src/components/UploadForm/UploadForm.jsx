'use client';
import { useRef, useState } from 'react';
import AdminGalleryList from '../AdminGalleryList/AdminGalleryList';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import { uploadPhoto } from '@/src/actions/uploadActions';
import { revalidate } from '@/src/actions/uploadActions';

const UploadForm = () => {
  const formRef = useRef();
  const [files, setFiles] = useState([]);

  const handleInputChange = async (e) => {
    const files = e.target.files;
    const newFiles = [...files].filter((file) => {
      if (file.size < 6024 * 6024 && file.type.startsWith('image/')) {
        return file;
      }
    });
    setFiles((prev) => [...newFiles, ...prev]);
  };

  const handleDelete = async (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleUpload = async () => {
    if (!files.length) return alert('no image files');

    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files', file);
    });

    const res = await uploadPhoto(formData);
    if (res.msg) alert(`Success:${res?.msg}`);
    if (res?.erMsg) alert(`Error:${res.erMsg}`);

    setFiles([]);

    formRef.current.reset();

    revalidate('/');
  };

  return (
    <>
      <form action={handleUpload} ref={formRef}>
        <div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleInputChange}
          />
        </div>
        <div>
          {files.map((file, index) => (
            <AdminGalleryList
              key={index}
              url={URL.createObjectURL(file)}
              onClick={() => handleDelete(index)}
            />
          ))}
        </div>
        <ButtonSubmit value="Upload to Cloudinary" />
      </form>
    </>
  );
};

export default UploadForm;
