import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { changePasswordWithCredentials } from '@/src/actions/authActions';

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
    <>
      <h2>Change Password</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleChangePassword}
      >
        <Form style={{ marginTop: '90px' }}>
          <div>
            <Field
              type={showPassword ? 'text' : 'password'}
              name="old_pass"
              placeholder="Old password"
            />
            <ErrorMessage name="old_pass">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <div>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="new_pass"
                placeholder="New password"
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
            <ErrorMessage name="new_pass">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <button>{isLoading ? <p>Loading...</p> : 'Change Password'}</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ChangePassword;
