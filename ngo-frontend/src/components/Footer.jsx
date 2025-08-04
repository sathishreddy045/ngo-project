import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} HopeFoundation. All Rights Reserved.</p>
            <p>Built with ❤️ for a better tomorrow.</p>
        </footer>
    );
};

export default Footer;