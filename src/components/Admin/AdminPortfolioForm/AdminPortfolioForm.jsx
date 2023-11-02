'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './adminPortfolioForm.module.css';
import { fredericka } from '@/src/app/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { clearPortfolioState } from '@/src/redux/portfolioSlice/portfolioSlice';
import { uploadPhotoPortfolio } from '@/src/actions/uploadPortfolioPhotoAction';

function PortfolioForm() {
  const [editingPortfolios, setEditingPortfolios] = useState({
    title: '',
    description: '',
    website: '',
    pageCode: '',
  });

  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const dispatch = useDispatch();
  const isFormActive = useSelector((state) => state.portfolio.isFormActive);
  const editingPortfolio = useSelector((state) => state.portfolio.portfolio);
  const portfolioId = useSelector((state) => state.portfolio.portfolio._id);

  useEffect(() => {
    if (isFormActive) {
      setEditingPortfolios({
        title: editingPortfolio.title || '',
        description: editingPortfolio.description || '',
        website: editingPortfolio.website || '',
        pageCode: editingPortfolio.pageCode || '',
        image: editingPortfolio.image || '',
      });
    }
  }, [editingPortfolio, isFormActive]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length > 0) {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append('files', file);
      });

      try {
        if (!isFormActive) {
          setIsLoading(true);
          const uploadResult = await uploadPhotoPortfolio(
            formData,
            editingPortfolios
          );

          if (uploadResult.msg) {
            alert(`Success: ${uploadResult.msg}`);
          } else {
            alert(`Error: ${uploadResult.erMsg}`);
          }

          setFiles([]);
          setSelectedImage(null);
          setEditingPortfolios({
            title: '',
            description: '',
            website: '',
            pageCode: '',
            image: '',
          });
        }

        if (isFormActive) {
          setIsLoadingUpdate(true);
          const uploadResult = await uploadPhotoPortfolio(
            formData,
            editingPortfolios,
            portfolioId
          );

          if (uploadResult.msg) {
            alert(`Success: ${uploadResult.msg}`);
          } else {
            alert(`Error: ${uploadResult.erMsg}`);
          }

          setEditingPortfolios({
            title: '',
            description: '',
            website: '',
            pageCode: '',
            image: '',
          });

          setFiles([]);
          setSelectedImage(null);
          dispatch(clearPortfolioState());
        }
      } catch (error) {
        console.error('Произошла ошибка:', error);
      } finally {
        setIsLoading(false);
        setIsLoadingUpdate(false);
      }
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

  const handleRemoveImage = () => {
    setFiles([]);
    setSelectedImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingPortfolios({
      ...editingPortfolios,
      [name]: value,
    });
  };

  return (
    <div className={fredericka.className}>
      <form onSubmit={handleSubmit} className={styles.adminPortfolioForm}>
        <h1 className={styles.adminPortfolioFormTitle}>Build a portfolio</h1>
        <div className={styles.adminPortfolioFormGroup}>
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="title"
            placeholder="Enter your title"
            value={editingPortfolios.title}
            onChange={handleChange}
            aria-label="title"
          />
        </div>
        <div className={styles.adminPortfolioFormGroup}>
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="description"
            placeholder="Enter your description"
            value={editingPortfolios.description}
            onChange={handleChange}
            aria-label="desctiption"
          />
        </div>
        <div className={styles.adminPortfolioFormGroup}>
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="website"
            placeholder="Enter your website"
            value={editingPortfolios.website}
            onChange={handleChange}
            aria-label="website"
          />
        </div>
        <div className={styles.adminPortfolioFormGroup}>
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="pageCode"
            placeholder="Enter your pageCode"
            value={editingPortfolios.pageCode}
            onChange={handleChange}
            aria-label="page code"
          />
        </div>
        <div className={styles.adminPortfolioFormGroup}>
          <label
            htmlFor="uploadPhotoAbout"
            className={styles.uploadPortfolioLabel}
          >
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
              blurDataURL={URL.createObjectURL(selectedImage)}
            />
            <button
              className={styles.removeImageButton}
              onClick={handleRemoveImage}
            >
              Remove
            </button>
          </div>
        )}
        <div className={styles.createFormButtonWrapper}>
          <button
            className={styles.createFormButton}
            type="submit"
            disabled={isFormActive}
          >
            <span className={fredericka.className}>
              {isLoading ? <p>Loading...</p> : 'Сreate Portfolio'}
            </span>
          </button>
          {isFormActive && (
            <button className={styles.createFormButton} type="submit">
              <span className={fredericka.className}>
                {isLoadingUpdate ? <p>Loading...</p> : 'Update Portfolio'}
              </span>
            </button>
          )}
        </div>
        {isFormActive && (
          <p className={styles.textChangePortfolio}>
            Enter data for editing the portfolio card
          </p>
        )}
      </form>
    </div>
  );
}

export default PortfolioForm;
