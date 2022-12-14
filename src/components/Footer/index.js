import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const history = useNavigate();
    return (
        <footer>
            <div className="foot-info">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/laura-jazmin1019/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin" alt="LinkedIn"></i>
                    </a>
                    <a href="https://github.com/andersonjaz" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github" alt="GitHub"></i>
                    </a>
                </div>
                <ul>
                    <li>Laura J. Anderson &copy; 2021-{new Date().getFullYear()}</li>
                    <li>
                        <button onClick={() => history(-1)}>
                            <i className="fa-solid fa-angles-left"></i> Previous Page
                        </button>
                    </li>
                    <li>
                        <button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                            <i className="fa-solid fa-arrow-up"></i> Top of Page
                        </button>
                    </li>
                </ul>
            </div>
      </footer>
    );
}

export default Footer;