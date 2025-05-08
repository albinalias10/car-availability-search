import React, { useState, useEffect, useRef } from 'react';
import type { Option } from '../types/priceOptions';
import { SORT_DROPDOWN_DEFAULT_LABEL, DROPDOWN_PLACEHOLDER_TEXT } from '../constants/constants';
import angleDown from '../assets/icons/angle-down.svg';
import angleUp from '../assets/icons/angle-up.svg';
import '../styles/SortDropdown.css';

interface SortDropdownProps {
    options: Option[];
}

const SortDropdown: React.FC<SortDropdownProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        console.log("Selected option:", option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (isOpen && sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

    return (
        <div className="sort-dropdown-container" ref={sortDropdownRef}>
            <button
                className="dropdown-button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {SORT_DROPDOWN_DEFAULT_LABEL} {selectedOption ? selectedOption.label : DROPDOWN_PLACEHOLDER_TEXT}
                <img
                    src={isOpen ? angleUp : angleDown}
                    alt="arrow"
                    className={"dropdown-arrow"}
                />
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`dropdown-item ${selectedOption?.value === option.value ? 'active' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;