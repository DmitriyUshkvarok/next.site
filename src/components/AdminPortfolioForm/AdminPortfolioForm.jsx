'use client';
import { useState, useEffect } from 'react';
import { createPortfolio } from '@/src/actions/portfolioActions';
import styles from './adminPortfolioForm.module.css';
import { fredericka } from '@/src/app/fonts';
import { useSelector, useDispatch } from 'react-redux';
import {
  updatePortfolioAsync,
  clearPortfolioState,
} from '@/src/redux/portfolioSlice/portfolioSlice';

function PortfolioForm() {
  const [editingPortfolios, setEditingPortfolios] = useState({
    title: '',
    description: '',
    website: '',
    pageCode: '',
    image: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const dispatch = useDispatch();
  const isFormActive = useSelector((state) => state.portfolio.isFormActive);
  const editingPortfolio = useSelector((state) => state.portfolio.portfolio);

  useEffect(() => {
    if (isFormActive) {
      // Обновите состояние editingPortfolio из Redux
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

    try {
      if (!isFormActive) {
        setIsLoading(true);
        await createPortfolio(editingPortfolios);
      }

      if (isFormActive) {
        setIsLoadingUpdate(true);
        await dispatch(
          updatePortfolioAsync({
            id: editingPortfolio,
            data: editingPortfolios,
          })
        );
        setEditingPortfolios({
          title: '',
          description: '',
          website: '',
          pageCode: '',
          image: '',
        });

        dispatch(clearPortfolioState());
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingUpdate(false);
    }
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
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="image"
            placeholder="Enter your image"
            value={editingPortfolios.image}
            onChange={handleChange}
            aria-label="image"
          />
        </div>
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
