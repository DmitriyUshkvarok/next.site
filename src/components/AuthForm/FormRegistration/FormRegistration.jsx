'use client';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpWithCredential } from '@/src/actions/authActions';
import { signIn } from 'next-auth/react';
import styles from './gormRegistration.module.css';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

function FormRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      values.callbackUrl = '/';
      const res = await signUpWithCredential(values);
      // await signIn('credentials', values);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <h1 className={styles.authTitle}>
        Signup or continue logging in with your google account.
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formLogin}>
          <h2 className={styles.authTitleForm}>signup</h2>
          <div className={styles.loginFormGroup}>
            <Field
              className={styles.formLoginInput}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={styles.loginFormGroup}>
            <Field
              className={styles.formLoginInput}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <div className={styles.loginFormGroup}>
              <Field
                className={styles.formLoginInput}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
              />
              <div
                className={styles.formLoginInputBtnShowPassword}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                )}
              </div>
            </div>
            <ErrorMessage name="password">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <button className={styles.loginFormButton} type="submit">
              {isLoading ? <p>Loading...</p> : 'Registration'}
            </button>
          </div>
          <Link className={styles.linkRegistr} href="/signin">
            login
          </Link>
        </Form>
      </Formik>
      <button
        className={styles.loginFormButtonGoogle}
        type="submit"
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        <FcGoogle size={20} />
        to continue with google
      </button>
    </>
  );
}
export default FormRegistration;
