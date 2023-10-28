'use client';
import { useRef, useState } from 'react';
import AdminGalleryList from '../AdminGalleryList/AdminGalleryList';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import { uploadPhoto } from '@/src/actions/uploadActions';
import { revalidate } from '@/src/actions/uploadActions';
import { fredericka } from '@/src/app/fonts';
import styles from './UploadForm.module.css';

const UploadForm = () => {
  const formRef = useRef();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

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
    try {
      setLoading(true);
      const res = await uploadPhoto(formData);
      console.log('Полученный ответ от сервера:', res);
      if (res.msg) alert(`Success:${res?.msg}`);
      if (res?.erMsg) alert(`Error:${res.erMsg}`);

      setFiles([]);

      formRef.current.reset();

      revalidate('/');
    } catch (error) {
      console.log('Ошибка при отправке запроса:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        action={handleUpload}
        ref={formRef}
        className={fredericka.className}
      >
        <h1 className={styles.uploadGalleryTitle}>Edit gallery</h1>
        <div>
          <label htmlFor="uploadPhoto" className={styles.uploadGalleryLabel}>
            Upload Photo (push)
            <input
              className={styles.inputFile}
              type="file"
              accept="image/*"
              multiple
              onChange={handleInputChange}
              id="uploadPhoto"
            />
          </label>
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
        <div className={styles.buttonSubmitWrapper}>
          <button className={styles.btnUpload}>
            <span className={fredericka.className}>
              {loading ? <p>Loading...</p> : 'Upload Photo'}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadForm;
