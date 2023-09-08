'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../components/i18n/i18n';

const LocalesProvider = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LocalesProvider;
