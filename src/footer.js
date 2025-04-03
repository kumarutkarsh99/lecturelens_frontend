import React from "react";

const Footer = () => {
    return (
        <footer className="footer d-flex justify-content-between align-items-center px-4 text-center">
            <div>
                <span className="footer-text">© 2025 Company, Inc</span>
            </div>

            <ul className="d-flex list-unstyled gap-3 m-0">
                <li>
                    <a className="text-white icons" href="https://github.com/kumarutkarsh99" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github fs-4"></i>
                    </a>
                </li>
                <li>
                    <a className="text-white icons" href="https://www.linkedin.com/in/kumar-utkarsh-1a601330b/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin fs-4"></i>
                    </a>
                </li>
                <li>
                    <a className="text-white icons" href="https://www.instagram.com/kumarutkarsh99/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
