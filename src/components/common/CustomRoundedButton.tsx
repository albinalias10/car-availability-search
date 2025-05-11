import React from 'react';
import '../../styles/customRoundedButton.css';

/* Implementing Custom Rounded Reusable Button */
const CustomRoundedButton: React.FC<CustomRoundedButtonProps> = ({ children, onClick }) => {
    return (
        <button className="custom-rounded-button" onClick={onClick}>
            {children}
        </button>
    );
};

interface CustomRoundedButtonProps {
    children: React.ReactElement | string;
    onClick?: () => void;
}

export default CustomRoundedButton;