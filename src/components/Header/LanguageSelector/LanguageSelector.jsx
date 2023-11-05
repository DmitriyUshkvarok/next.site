import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLanguage,
  setLanguage,
} from '@/src/redux/language/languageSlice';
import { useCookies } from 'react-cookie';
import { FiGlobe } from 'react-icons/fi';
import style from './LanguageSelector.module.css';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    // При загрузке компонента, проверяем куки на наличие сохраненного языка
    const savedLanguage = cookies['selectedLanguage'];
    if (savedLanguage) {
      dispatch(setLanguage(savedLanguage));
      i18n.changeLanguage(savedLanguage);
    }
  }, [dispatch, i18n, cookies]);

  const changeLanguage = (language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    setCookie('selectedLanguage', language); // Сохраняем язык в куки
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeBackdrop = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.languageSelector}>
      <button onClick={toggleDropdown} className={style.languageButton}>
        <FiGlobe />
        {
          selectedLanguage === 'en'
            ? 'English'
            : selectedLanguage === 'ru'
            ? 'Русский'
            : selectedLanguage === 'uk' // Додано перевірку для української мови
            ? 'Українська'
            : 'English' // За замовчуванням використовуємо англійську мову
        }
      </button>
      {isOpen && <div className={style.backdrop} onClick={closeBackdrop}></div>}
      {isOpen && (
        <div className={style.languageDropdown}>
          <button
            onClick={() => changeLanguage('en')}
            className={style.languageDropdownBtn}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className={style.languageDropdownBtn}
          >
            Русский
          </button>
          <button
            onClick={() => changeLanguage('uk')}
            className={style.languageDropdownBtn}
          >
            Українська
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
