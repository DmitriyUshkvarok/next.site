'use client';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLoginMutation } from '@/src/redux/authApi/authApi';

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
  const [loginMutation] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await loginMutation(values);
      if (response.error) {
        if (response.error.status === 401) {
          toast.error(response.error.data.message);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      }
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
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <div>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
              />
              <div onClick={togglePasswordVisibility}>
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
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <button type="submit">
              {isLoading ? <p>Loading...</p> : 'Log In Now'}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
export default LogInForm;