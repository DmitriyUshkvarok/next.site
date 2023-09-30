'use client';
// import * as yup from 'yup';
// import { createPortfolio } from '@/src/actions/portfolioActions';
// import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
// import { useState, useEffect } from 'react';
// import styles from './adminPortfolioForm.module.css';
// import { fredericka } from '@/src/app/fonts';
// import { useSelector, useDispatch } from 'react-redux';
// import { updatePortfolioAsync } from '@/src/redux/portfolioSlice/portfolioSlice';
// const schema = yup.object().shape({
//   title: yup.string().required(),
//   description: yup.string().required(),
//   website: yup.string().required(),
//   pageCode: yup.string().required(),
//   image: yup.string().required(),
// });

// function PortfolioForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
//   const dispatch = useDispatch();
//   const editingPortfolio = useSelector((state) => state.portfolio.portfolio);
//   const isFormActive = useSelector((state) => state.portfolio.isFormActive);

//   // const formik = useFormik({
//   //   initialValues: {
//   //     title: editingPortfolio.title || '',
//   //     description: editingPortfolio.description || '',
//   //     website: editingPortfolio.website || '',
//   //     pageCode: editingPortfolio.pageCode || '',
//   //     image: editingPortfolio.image || '',
//   //   },
//   // });

//   // useEffect(() => {
//   //   if (isFormActive) {
//   //     // Установите значения полей формы из editingPortfolio
//   //     formik.setFieldValue('title', editingPortfolio.title || '');
//   //     formik.setFieldValue('description', editingPortfolio.description || '');
//   //     formik.setFieldValue('website', editingPortfolio.website || '');
//   //     formik.setFieldValue('pageCode', editingPortfolio.pageCode || '');
//   //     formik.setFieldValue('image', editingPortfolio.image || '');
//   //   }
//   // }, [editingPortfolio, isFormActive]);

//   // console.log(formik);

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       if (!isFormActive) {
//         setIsLoading(true);
//         await createPortfolio(values);
//       }

//       if (isFormActive) {
//         setIsLoadingUpdate(true);
//         await dispatch(
//           updatePortfolioAsync({ id: editingPortfolio, data: values })
//         );
//       }
//     } catch (error) {
//       console.error('Произошла ошибка:', error);
//     } finally {
//       setIsLoading(false);
//       setIsLoadingUpdate(false);
//     }
//     resetForm();
//   };

//   return (
//     <div className={fredericka.className}>
//       <Formik
//         initialValues={formik.initialValues}
//         validationSchema={schema}
//         onSubmit={handleSubmit}
//       >
//         <Form className={styles.adminPortfolioForm}>
//           <h2 className={styles.adminPortfolioFormTitle}>Build a portfolio</h2>
//           <div className={styles.adminPortfolioFormGroup}>
//             <Field
//               className={styles.adminPortfolioFormInput}
//               type="text"
//               name="title"
//               placeholder="Enter your title"
//             />
//             <ErrorMessage name="title">
//               {(msg) => <div className={styles.validationError}>{msg}</div>}
//             </ErrorMessage>
//           </div>
//           <div className={styles.adminPortfolioFormGroup}>
//             <Field
//               className={styles.adminPortfolioFormInput}
//               type="text"
//               name="description"
//               placeholder="Enter your description"
//               // value={description}
//               // onChange={(e) => setDescription(e.target.value)}
//             />
//             <ErrorMessage name="description">
//               {(msg) => <div className={styles.validationError}>{msg}</div>}
//             </ErrorMessage>
//           </div>
//           <div className={styles.adminPortfolioFormGroup}>
//             <Field
//               className={styles.adminPortfolioFormInput}
//               type="text"
//               name="website"
//               placeholder="Enter your website"
//               // value={website}
//               // onChange={(e) => setWebsite(e.target.value)}
//             />
//             <ErrorMessage name="website">
//               {(msg) => <div className={styles.validationError}>{msg}</div>}
//             </ErrorMessage>
//           </div>
//           <div className={styles.adminPortfolioFormGroup}>
//             <Field
//               className={styles.adminPortfolioFormInput}
//               type="text"
//               name="pageCode"
//               placeholder="Enter your pageCode"
//               // value={pageCode}
//               // onChange={(e) => setPageCode(e.target.value)}
//             />
//             <ErrorMessage name="pageCode">
//               {(msg) => <div className={styles.validationError}>{msg}</div>}
//             </ErrorMessage>
//           </div>
//           <div className={styles.adminPortfolioFormGroup}>
//             <Field
//               className={styles.adminPortfolioFormInput}
//               type="text"
//               name="image"
//               placeholder="Enter your image"
//               // value={image}
//               // onChange={(e) => setImage(e.target.value)}
//             />
//             <ErrorMessage name="image">
//               {(msg) => <div className={styles.validationError}>{msg}</div>}
//             </ErrorMessage>
//           </div>
//           <div className={styles.createFormButtonWrapper}>
//             <button
//               className={styles.createFormButton}
//               type="submit"
//               disabled={isFormActive}
//             >
//               <span className={fredericka.className}>
//                 {isLoading ? <p>Loading...</p> : 'Сreate Portfolio'}
//               </span>
//             </button>
//             {isFormActive && (
//               <button className={styles.createFormButton} type="submit">
//                 <span className={fredericka.className}>
//                   {isLoadingUpdate ? <p>Loading...</p> : 'Update Portfolio'}
//                 </span>
//               </button>
//             )}
//           </div>
//           {isFormActive && (
//             <p className={styles.textChangePortfolio}>
//               Enter data for editing the portfolio card
//             </p>
//           )}
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default PortfolioForm;
import { useState, useEffect } from 'react';
import * as yup from 'yup';
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
        await createPortfolio(editingPortfolio);
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
        <h2 className={styles.adminPortfolioFormTitle}>Build a portfolio</h2>
        <div className={styles.adminPortfolioFormGroup}>
          <input
            className={styles.adminPortfolioFormInput}
            type="text"
            name="title"
            placeholder="Enter your title"
            value={editingPortfolios.title}
            onChange={handleChange}
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
