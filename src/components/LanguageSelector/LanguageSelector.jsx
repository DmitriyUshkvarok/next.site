import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLanguage,
  setLanguage,
} from '@/src/redux/language/languageSlice';
import { useCookies } from 'react-cookie';
import { FiGlobe } from 'react-icons/fi';

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
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button onClick={toggleDropdown} className="language-button">
        <FiGlobe />
        {selectedLanguage === 'en' ? 'English' : 'Русский'}
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
