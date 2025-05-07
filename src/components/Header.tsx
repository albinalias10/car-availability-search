import React from 'react';
import partnerLogo from '../assets/partner-logo/partner.svg';
import '../styles/Header.css';
import { HEADER_TITLE } from '../constants/constants';


const Header: React.FC = () => {
    return (
        <header className="header">
                <div className="logo-container">
                    <img src={partnerLogo} alt="Logo" className="logo-image" />
                </div>
                <div className="seperator"/>
                <div className="header-title">{HEADER_TITLE}</div>
        </header>
    );
};

export default Header;