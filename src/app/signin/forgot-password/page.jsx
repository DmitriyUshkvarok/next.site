'use client';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import styles from './forgotPassword.module.css';
import ButtonSubmit from '@/src/components/Buttons/ButtonSubmit';
import { forgotPasswordWithCredentials } from '@/src/actions/authActions';

const initialValues = {
  email: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
});

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const res = await forgotPasswordWithCredentials(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };
  return (
    <div>
      <h1 className={styles.forgotPasswordTitle}>Enter your e-mail</h1>
      <div className={styles.forgotPasswordBox}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleForgotPassword}
        >
          <Form>
            <div className={styles.formWrapper}>
              <Field
                className={styles.formLoginInput}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email">
                {(msg) => <div className={styles.validationError}>{msg}</div>}
              </ErrorMessage>
              <ButtonSubmit value="Forgot Password" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
