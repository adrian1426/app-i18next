import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <p>{t("home.title")}</p>
      <br />
      <button onClick={() => i18n.changeLanguage('en')}>En</button>
      <button onClick={() => i18n.changeLanguage('es')}>Es</button>
    </div>
  );
}

export default App;
