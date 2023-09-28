'use client';
import * as yup from 'yup';
import { createPortfolio } from '@/src/actions/portfolioActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import styles from './adminPortfolioForm.module.css';
import { fredericka } from '@/src/app/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { updatePortfolioAsync } from '@/src/redux/portfolioSlice/portfolioSlice';

const initialValues = {
  title: '',
  description: '',
  website: '',
  pageCode: '',
  image: '',
};

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  website: yup.string().required(),
  pageCode: yup.string().required(),
  image: yup.string().required(),
});

function PortfolioForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const dispatch = useDispatch();
  const editingPortfolio = useSelector((state) => state.portfolio.portfolio);
  const isFormActive = useSelector((state) => state.portfolio.isFormActive);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!isFormActive) {
        setIsLoading(true);
        await createPortfolio(values);
      }

      if (isFormActive) {
        setIsLoadingUpdate(true);
        await dispatch(
          updatePortfolioAsync({ id: editingPortfolio, data: values })
        );
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingUpdate(false);
    }
    resetForm();
  };

  return (
    <div className={fredericka.className}>
      <Formik
        initialValues={editingPortfolio || initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.adminPortfolioForm}>
          <h2 className={styles.adminPortfolioFormTitle}>Build a portfolio</h2>
          <div className={styles.adminPortfolioFormGroup}>
            <Field
              className={styles.adminPortfolioFormInput}
              type="text"
              name="title"
              placeholder="Enter your title"
            />
            <ErrorMessage name="title">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.adminPortfolioFormGroup}>
            <Field
              className={styles.adminPortfolioFormInput}
              type="text"
              name="description"
              placeholder="Enter your description"
            />
            <ErrorMessage name="description">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.adminPortfolioFormGroup}>
            <Field
              className={styles.adminPortfolioFormInput}
              type="text"
              name="website"
              placeholder="Enter your website"
            />
            <ErrorMessage name="website">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.adminPortfolioFormGroup}>
            <Field
              className={styles.adminPortfolioFormInput}
              type="text"
              name="pageCode"
              placeholder="Enter your pageCode"
            />
            <ErrorMessage name="pageCode">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.adminPortfolioFormGroup}>
            <Field
              className={styles.adminPortfolioFormInput}
              type="text"
              name="image"
              placeholder="Enter your image"
            />
            <ErrorMessage name="image">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
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
        </Form>
      </Formik>
    </div>
  );
}

export default PortfolioForm;
