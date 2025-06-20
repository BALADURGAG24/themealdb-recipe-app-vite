import { useEffect } from 'react';

const useDarkMode = () => {
  useEffect(() => {
    const toggle = () => {
      const html = document.documentElement;
      const isDark = localStorage.getItem('theme') === 'dark';
      html.classList.toggle('dark', isDark);
    };
    toggle();
  }, []);
};

export default useDarkMode;
