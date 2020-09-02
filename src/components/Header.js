import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = props => {

  const { t, i18n } = useTranslation('global');

  return (
    <div>
      <h1>{t('header.hello-world')}</h1>
      <br />
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
    </div>
  );
};

export default Header;