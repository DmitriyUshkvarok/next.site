'use client';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { resetPasswordWithCredentials } from '@/src/actions/authActions';
import styles from './ResetPassword.module.css';

const initialValues = {
  password: '',
};

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

const ResetPasswordComponent = ({ token }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const res = await resetPasswordWithCredentials({
        token,
        password: values.password,
      });
      if (res.msg) alert(res?.msg);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };
  return (
    <div style={{ marginTop: '130px' }}>
      <h1>New Password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleResetPassword}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="password"
              placeholder="Enter your new password"
              aria-label="password"
            />
            <ErrorMessage name="password">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            <button className={styles.btnNewPass} type="submit">
              {isLoading ? 'Loading...' : 'New Password'}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordComponent;
