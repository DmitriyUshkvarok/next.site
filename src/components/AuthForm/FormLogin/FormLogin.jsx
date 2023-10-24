'use client';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from './formLogin.module.css';
import { FcGoogle } from 'react-icons/fc';
import { GiClick } from 'react-icons/gi';
import { fredericka } from '@/src/app/fonts';

const initialValues = {
  email: '',
  password: '',
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
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

function LogInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      values.callbackUrl = '/';
      await signIn('credentials', values);
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
    <div className={fredericka.className}>
      <h1 className={styles.authTitle}>
        log in or continue logging in with your google account.
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formLogin}>
          <h2 className={styles.authTitleForm}>logIn</h2>
          <div className={styles.loginFormGroup}>
            <Field
              className={styles.formLoginInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="email"
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
                aria-label="password"
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
              {isLoading ? (
                <p className={fredericka.className}>Loading...</p>
              ) : (
                <span className={fredericka.className}>Log In Now</span>
              )}
            </button>
          </div>
          <Link className={styles.linkRegistr} href="/signup">
            Registration
          </Link>
        </Form>
      </Formik>
      <button
        className={styles.loginFormButtonGoogle}
        type="submit"
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        <FcGoogle size={20} />
        <span className={fredericka.className}>to continue with google</span>
      </button>
      <div className={styles.forgotLinkWrapper}>
        <Link className={styles.forgotLink} href="signin/forgot-password/">
          Forgot your password?
        </Link>
        <GiClick className={styles.forgotLinkIcon} size={25} />
      </div>
    </div>
  );
}
export default LogInForm;
