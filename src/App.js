import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation(['welcome']);

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

        <br />
        <button onClick={() => handleChangeIdioma('en')}>English</button>
        <button onClick={() => handleChangeIdioma('es-mx')}>Español México</button>
        <button onClick={() => handleChangeIdioma('es-co')}>Español Colombia</button>
      </header>
    </div>
  );
}

export default App;
