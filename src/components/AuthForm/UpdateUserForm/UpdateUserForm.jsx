'use client';
import { useState } from 'react';
import { updateUser } from '@/src/actions/authActions';
import styles from './updateUserForm.module.css';

const UpdateUserForm = ({ update }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (update) {
        update({ name, image });
      }
      const res = await updateUser({ name, image });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className={styles.updateUserTitle}>edit profile</h2>
      <form className={styles.updateUserForm} onSubmit={handleUpdateProfile}>
        <div className={styles.updateFormGroup}>
          <label className={styles.updateUserLabel} htmlFor="name">
            edit name:
          </label>
          <input
            className={styles.updateUserInput}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="name"
            required
          />
        </div>
        <div className={styles.updateFormGroup}>
          <label className={styles.updateUserLabel} htmlFor="image">
            edit avatar:
          </label>
          <input
            className={styles.updateUserInput}
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            aria-label="image"
            required
          />
        </div>
        <button className={styles.btnEditProfile}>
          {isLoading ? 'Loading...' : 'Edit Prpfile'}
        </button>
      </form>
    </>
  );
};

export default UpdateUserForm;
