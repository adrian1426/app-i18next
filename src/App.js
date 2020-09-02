import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const handleChangeIdioma = idioma => {
    i18n.changeLanguage(idioma);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>idioma: {i18n.language}</h2>
        <p>
          {t('app.title', { name: 'Adriancito' })}
        </p>
        <p dangerouslySetInnerHTML={{ __html: t('app.title', { name: "Adriancito" }) }} />

        <br />
        <button onClick={() => handleChangeIdioma('en')}>English</button>
        <button onClick={() => handleChangeIdioma('es')}>Español</button>
      </header>
    </div>
  );
}

export default App;
