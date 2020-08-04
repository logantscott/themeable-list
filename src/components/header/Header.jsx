import React, { useEffect } from 'react';
import styles from './Header.css';
import { useTheme, useDispatch } from '../../hooks/appContext';

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleLight = () => {
    // console.log('light');
    dispatch({ type: 'LIGHT_THEME' });
  };

  const handleDark = () => {
    // console.log('dark');
    dispatch({ type: 'DARK_THEME' });
  };

  useEffect(() => {
    // console.log('theme: ', theme);
    document.body.style = `background-color: var(--${theme}-bg-color); color: var(--${theme}-font-color)`;
  }, [theme]);

  return (
    <header className={styles.Header}>
      <h1>Avatar API!</h1>
      <div>
        <span onClick={handleLight}>Light</span>
        <span onClick={handleDark}>Dark</span>
      </div>
      <hr />
    </header>
  );
};

export default Header;
