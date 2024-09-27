import { useContext } from 'react';
import ThemeContext from '../context/theme-context';
import { THEMES } from '../constants';

export default function ThemeApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`app ${theme}`}>
      <h1>Cambio de temas</h1>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <p>Modo: {theme === THEMES.DARK ? 'Oscuro' : 'Claro'}</p>
    </section>
  );
}
