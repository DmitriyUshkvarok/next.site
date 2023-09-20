'use client';
import { useState } from 'react';
import { updateUser } from '@/src/actions/authActions';
import ButtonSubmit from '../../Buttons/ButtonSubmit';

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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleUpdateProfile} style={{ marginTop: '90px' }}>
        <div>
          <label htmlFor="name">Редактировать Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Изображение:</label>
          <input
            // type="file"
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ButtonSubmit value="Редактировать профиль" />
        )}
      </form>
    </>
  );
};

export default UpdateUserForm;