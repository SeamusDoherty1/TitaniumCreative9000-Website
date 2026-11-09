import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, onSelect, label = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div style={styles.container} ref={dropdownRef}>
      <button 
        type="button" 
        onClick={() => setIsOpen((prev) => !prev)} 
        style={styles.triggerButton}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : label}
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <ul style={styles.menu} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              style={styles.menuItem}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Inline styling for self-contained demonstration
const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: '220px',
    fontFamily: 'sans-serif'
  },
  triggerButton: {
    width: '100%',
    padding: '10px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  menu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    marginTop: '4px',
    padding: 0,
    listStyle: 'none',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    maxHeight: '200px',
    overflowY: 'auto'
  },
  menuItem: {
    padding: '10px 14px',
    cursor: 'pointer',
    fontSize: '14px',
    borderBottom: '1px solid #f0f0f0'
  }
};

export default Dropdown;