import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000033', color: '#fff' }} className="px-16 py-5">
            <div>
                <img style={{ width: '40px', marginRight: '15px' }} src={logo} alt="" />
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;