import { useState } from 'react';
import './App.css';
import ThemeApp from './components/theme-app';
import ThemeProvider from './context/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  );
}

export default App;
