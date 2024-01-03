// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'warning' | 'dark' | 'warning-yellow' | 'white'; // You can add more color options
  style?: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, color, style, type = 'button', onClick }) => {
  const className = ` ${styles[color]} ${style} `;
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
