

import React, { useContext, useState } from 'react';

// Создаем контекст для хранения текущей темы приложения
const ThemeContext = React.createContext();

// Создаем компонент для кнопки изменения темы
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
      Toggle Theme
    </button>
  );
}

// Создаем компонент для отображения текущей темы
const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
      Current Theme: {theme}
    </div>
  );
}

const App = () => {
  const [theme, setTheme] = useState('light');

  // Функция для изменения темы
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <ThemeToggle />
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;