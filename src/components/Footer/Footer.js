import React from 'react';
import './Footer.scss'

function Footer() {
    return (
        <div className='footer_cont'>
            <div className='footer'>
                <div>
                    <span>Having Trouble?</span>
                    <span><a href=''>Visit our Help center</a></span>
                </div>
                <div>
                    <a href=''>Terms of Use</a>
                    <a href=''>Privacy Policy</a>
                </div>
            </div>
        </div>
        );
}

export default Footer;
