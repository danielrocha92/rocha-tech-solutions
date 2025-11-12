import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeSelectorModal.css';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();

  if (!isOpen) return null;

  const handleThemeChange = (selectedTheme: 'light' | 'dark' | 'system') => {
    setTheme(selectedTheme);
    onClose();
  };

  return (
    <div className="theme-modal-overlay" onClick={onClose}>
      <div className="theme-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Selecione o Tema</h3>
        <div className="theme-options">
          <button
            className={`theme-option-button ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            ☀️ Claro
          </button>
          <button
            className={`theme-option-button ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            🌙 Escuro
          </button>
          <button
            className={`theme-option-button ${theme === 'system' ? 'active' : ''}`}
            onClick={() => handleThemeChange('system')}
          >
            💻 Sistema
          </button>
        </div>
        <button className="theme-modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ThemeSelectorModal;
