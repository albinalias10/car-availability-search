import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Option } from '../types/priceOptionType';
import { SORT_DROPDOWN_DEFAULT_LABEL, DROPDOWN_PLACEHOLDER_TEXT } from '../constants/constants';
import angleDown from '../assets/icons/angle-down.svg';
import angleUp from '../assets/icons/angle-up.svg';
import '../styles/SortDropdown.css';
import type { AppDispatch, RootState } from '../redux/store';
import { setSortingOrder } from '../redux/action';
import type { SortValue } from '../redux/actionType';

interface SortDropdownProps {
    options: Option[];
    isCarSelected?: boolean;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ options, isCarSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedSortValue = useSelector((state: RootState) => state.sortValue);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options.find((option) => option.value === selectedSortValue) || null
    );
    const dispatch = useDispatch<AppDispatch>();
    const sortDropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        dispatch(setSortingOrder(option.value as SortValue)); // Dispatch the selected option value to Redux store
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
        <div className={`sort-dropdown-container ${isCarSelected ? ' dropdown-disabled' : ''}`} ref={sortDropdownRef}>
            <button
                className="dropdown-button"
                onClick={() => setIsOpen((prev) => !prev)}
                disabled={isCarSelected} 
            >
                {SORT_DROPDOWN_DEFAULT_LABEL} {selectedOption ? selectedOption.label : DROPDOWN_PLACEHOLDER_TEXT}
                <img
                    src={isOpen ? angleUp : angleDown}
                    alt="arrow"
                    className="dropdown-arrow"
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