    import React, { useState } from 'react';

    const Header = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleNavbar = () => {
            setIsOpen(!isOpen);
        };

        return (
            <nav className="navbar navbar-expand-md px-2" aria-label="Navbar">
                <div className="container-fluid">
                    <a className="navbar-brand header-text" href="/">LectureLens</a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleNavbar} 
                        aria-controls="navbarsExample04" 
                        aria-expanded={isOpen} 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? "show animated-collapse" : ""}`} id="navbarsExample04">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-2">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/upload">Upload</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/search">Search</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };

    export default Header;
