'use client';
import { useCreatePortfolioMutation } from '@/src/redux/createPortfolioApi/createPortfolioApi';
import { useState } from 'react';

function PortfolioForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [pageCode, setPageCode] = useState('');
  const [image, setImage] = useState(''); // Состояние для выбранного изображения
  const [createPortfolio] = useCreatePortfolioMutation();

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const createPortfolioObject = {
        title: title,
        description: description,
        website: website,
        pageCode: pageCode,
        image: image,
      };

      // Отправка запроса на создание портфолио
      const response = await createPortfolio(createPortfolioObject);

      if (response.error) {
        // Обработка ошибок
        console.error('Произошла ошибка:', response.error);
      } else {
        // Успешное создание портфолио
        console.log('Портфолио успешно создано:', response.data);
        // Очистка полей формы
        setTitle('');
        setDescription('');
        setWebsite('');
        setPageCode('');
        setImage('');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '90px' }}>
      <div>
        <label htmlFor="title">Заголовок:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Описание:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="website">Вебсайт:</label>
        <input
          type="url"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pageCode">Вебсайт:</label>
        <input
          type="url"
          id="pageCode"
          value={pageCode}
          onChange={(e) => setPageCode(e.target.value)}
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
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Создать портфолио</button>
    </form>
  );
}

export default PortfolioForm;
