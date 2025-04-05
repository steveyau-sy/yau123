import React from 'react';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="footer">
    <PageLink groupClass="footer-links" itemClass="footer-link"/>
    <SocialLink groupClass="footer-social"/>
        
    <p className="copyright">copyright &copy;
    HKCS tours company <span id="date">{new Date().getFullYear()} all right reserved
    </span></p>
</footer>
  )
};

export default Footer




