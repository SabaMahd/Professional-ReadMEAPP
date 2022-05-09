import React from "react";

// NavTabs handles navigation between pages

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "About"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  >
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                     href="#ReadmeGenerator"
                     onClick={() => handlePageChange('ReadmeGenerator')}
                     // Check to see if the currentPage is `ReadmeGenerator`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                     className={currentPage === 'ReadmeGenerator' ? 'nav-link active' : 'nav-link'}
                    >
                    ReadmeGenerator
                    </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#signin"
                    onClick={() => handlePageChange('SigninPage')}
                    // Check to see if the currentPage is `SigninPage`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'SigninPage' ? 'nav-link active' : 'nav-link'}
                  >
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#signup"
                        onClick={() => handlePageChange('Signup')}
                        className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
                    >
                      Sign Up
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;