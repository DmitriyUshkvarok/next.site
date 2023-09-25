'use client';
import * as yup from 'yup';
import { createPortfolio } from '@/src/actions/portfolioActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);

      await createPortfolio(values);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>создать портфолио</h2>
        <div>
          <Field type="text" name="title" placeholder="Enter your title" />
          <ErrorMessage name="title">{(msg) => <div>{msg}</div>}</ErrorMessage>
        </div>
        <div>
          <Field
            type="text"
            name="description"
            placeholder="Enter your description"
          />
          <ErrorMessage name="description">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
        </div>
        <div>
          <Field type="text" name="website" placeholder="Enter your website" />
          <ErrorMessage name="website">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
        </div>
        <div>
          <Field
            type="text"
            name="pageCode"
            placeholder="Enter your pageCode"
          />
          <ErrorMessage name="pageCode">
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
        </div>
        <div>
          <Field type="text" name="image" placeholder="Enter your image" />
          <ErrorMessage name="image">{(msg) => <div>{msg}</div>}</ErrorMessage>
        </div>
        <div>
          <button type="submit">
            {isLoading ? <p>Loading...</p> : 'Создать портфолио'}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default PortfolioForm;
