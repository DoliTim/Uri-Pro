import React from 'react';
import './Navbar.css';
import Select, { components } from 'react-select';
import WorldFlag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import { FaTag } from 'react-icons/fa';
import logo from '../images/logo.png';

// Expanded language options
const languageOptions = [
  { value: 'en', label: 'English', code: 'GB' },
  // ... add the rest of the language options
];

const Navbar = ({
  scrollToProductSection,
  changeLanguage,
}) => {
  const { t } = useTranslation();

  const options = languageOptions.map((lang) => ({
    value: lang.value,
    label: lang.label,
    code: lang.code,
  }));

  // Custom SingleValue component
  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WorldFlag code={props.data.code} style={{ width: '16px', marginRight: '5px' }} />
        {children}
      </div>
    </components.SingleValue>
  );

  // Custom Option component
  const Option = (props) => (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WorldFlag code={props.data.code} style={{ width: '16px', marginRight: '5px' }} />
        {props.data.label}
      </div>
    </components.Option>
  );

  return (
    <nav className="navbar">
      {/* Logo and Uri-PRO Text */}
      <div className="logo-buy-container">
        <div className="logo-btn" onClick={scrollToProductSection}>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        {/* Uri-PRO Text in Green */}
        <span className="uri-pro-text">Uri - PRO</span>
      </div>

      {/* Centered Sale Info */}
      <div className="centered-content">
        <div className="sale-info">
          <FaTag className="sale-icon" />
          <span className="sale-text">{t('FREE WORLDWIDE SHIPPING RIGHT NOW FOR NEW CUSTOMERS')}</span>
        </div>
      </div>

    
    </nav>
  );
};

export default Navbar;
