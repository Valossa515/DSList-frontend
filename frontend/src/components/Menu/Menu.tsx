import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {showDropdown && (
          <ul className="menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lists">Lists</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
