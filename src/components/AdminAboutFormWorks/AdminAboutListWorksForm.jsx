'use client';
import styles from './AdminAboutWorks.module.css';
import { useState, useRef } from 'react';
import { fredericka } from '@/src/app/fonts';
import { uploadPhotoWork } from '@/src/actions/uploadAbotPhotoActions';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { updateWork } from '@/src/actions/worksAction';

const AdminAboutWorksForm = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingWorks, setEditingWorks] = useState({
    enterprise: '',
    data: '',
    region: '',
    position: [],
  });
  const isWorkFormActive = useSelector((state) => state.work.isWorkFormActive);
  const workId = useSelector((state) => state.work.work._id);

  const handleSubmit = async () => {
    const workData = {
      enterprise: editingWorks.enterprise,
      data: editingWorks.data,
      region: editingWorks.region,
      position: editingWorks.position,
      image: '',
    };

    if (files.length > 0) {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append('files', file);
      });

      try {
        if (!isWorkFormActive) {
          setIsLoading(true);
          const uploadResult = await uploadPhotoWork(formData, workData);
          if (uploadResult.msg) {
            alert(`Success: ${uploadResult.msg}`);
          } else {
            alert(`Error: ${uploadResult.erMsg}`);
          }
          formRef.current.reset();
          setFiles([]);
          setSelectedImage(null);
        }

        if (isWorkFormActive) {
          setIsLoading(true);
          try {
            const uploadResult = await uploadPhotoWork(
              formData,
              workData,
              workId
            );
            if (uploadResult.msg) {
              alert(`Success: ${uploadResult.msg}`);
            } else {
              alert(`Error: ${uploadResult.erMsg}`);
            }
            formRef.current.reset();
          } catch (error) {}
        }
      } catch (error) {
        console.error(error);

        setIsLoading(false);
        alert('An error occurred during the image upload.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('No image files selected');
    }
  };

  const handleInputImageChange = async (e) => {
    const files = e.target.files;
    const newFiles = [...files].filter((file) => {
      if (file.size < 6024 * 6024 && file.type.startsWith('image/')) {
        return file;
      }
    });
    setFiles((prev) => [...newFiles, ...prev]);
    setSelectedImage(newFiles[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingWorks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = () => {
    setFiles([]);
    setSelectedImage(null);
  };
  return (
    <div>
      <form
        action={handleSubmit}
        ref={formRef}
        className={styles.adminAboutForm}
      >
        <h1 className={`${fredericka.className} ${styles.adminAboutFormTitle}`}>
          Editin About Page
        </h1>
        <div className={styles.adminAboutFormGroup}>
          <input
            className={styles.adminAboutFormInput}
            type="text"
            name="enterprise"
            placeholder="Enter your enterprise"
            value={editingWorks.enterprise}
            onChange={handleChange}
          />
        </div>
        <div className={styles.adminAboutFormGroup}>
          <input
            className={styles.adminAboutFormInput}
            type="text"
            name="data"
            placeholder="Enter your data"
            value={editingWorks.data}
            onChange={handleChange}
          />
        </div>
        <div className={styles.adminAboutFormGroup}>
          <label htmlFor="uploadPhotoAbout" className={styles.uploadAboutLabel}>
            Upload Photo (push)
            <input
              className={styles.inputFile}
              type="file"
              accept="image/*"
              onChange={handleInputImageChange}
              id="uploadPhotoAbout"
            />
          </label>
        </div>
        {selectedImage && (
          <div className={styles.selectedImageContainer}>
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              width={50}
              height={50}
              className={styles.selectedImage}
            />
            <button
              className={styles.removeImageButton}
              onClick={handleRemoveImage}
            >
              Remove
            </button>
          </div>
        )}
        <div className={styles.adminAboutFormGroup}>
          <input
            className={styles.adminAboutFormInput}
            type="text"
            name="region"
            placeholder="Enter your region"
            value={editingWorks.region}
            onChange={handleChange}
          />
        </div>
        <div className={styles.adminAboutFormGroup}>
          <input
            className={styles.adminAboutFormInput}
            type="text"
            name="position"
            placeholder="Enter your position"
            value={editingWorks.position}
            onChange={handleChange}
          />
        </div>
        <div className={styles.createFormButtonWrapper}>
          <button
            className={styles.createFormButton}
            type="submit"
            disabled={isWorkFormActive}
          >
            {isLoading ? <p>Loading...</p> : 'Сreate Work'}
          </button>
          {isWorkFormActive && (
            <button className={styles.createFormButton} type="submit">
              <span className={fredericka.className}>
                {isLoadingUpdate ? <p>Loading...</p> : 'Update Portfolio'}
              </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminAboutWorksForm;
