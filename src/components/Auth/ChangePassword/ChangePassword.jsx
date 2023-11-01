'use client';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { changePasswordWithCredentials } from '@/src/actions/authActions';
import styles from './changePassword.module.css';
import { fredericka } from '@/src/app/fonts';

const initialValues = {
  old_pass: '',
  new_pass: '',
};
const schema = yup.object().shape({
  old_pass: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
  new_pass: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChangePassword = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const res = await changePasswordWithCredentials(values);
      if (res.msg) alert(res.msg);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    resetForm();
  };
  return (
    <div className={fredericka.className}>
      <h3 className={styles.changePasswordTitle}>Change Password</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleChangePassword}
      >
        <Form className={styles.changePasswordForm}>
          <div className={styles.changePasswordFormGroup}>
            <Field
              className={styles.changePasswordFormInput}
              type={showPassword ? 'text' : 'password'}
              name="old_pass"
              placeholder="Old password"
              aria-label="old_pass"
            />
            <ErrorMessage name="old_pass">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <div className={styles.changePasswordFormGroup}>
              <Field
                className={styles.changePasswordFormInput}
                type={showPassword ? 'text' : 'password'}
                name="new_pass"
                placeholder="New password"
                aria-label="new_pass"
              />
              <div
                className={styles.changePasswordShow}
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
            <ErrorMessage name="new_pass">
              {(msg) => <div className={styles.validationError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <button className={styles.btnChange}>
              <span className={fredericka.className}>
                {isLoading ? <p>Loading...</p> : 'Change Password'}
              </span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
