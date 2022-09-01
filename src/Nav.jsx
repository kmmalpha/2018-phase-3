import React, {useState} from "react";
import './nav.css';


function Nav() {
    const [navExpanded, setNavExpanded] = useState(false)

    return (
        <nav className="nav">
            <a href="/" className="brand-name">My Webpage</a>
            <button
                className="options"
                onClick={() => {
                    setNavExpanded(!navExpanded);
                }}>
                {/* icom from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={
                navExpanded ? "nav-menu expanded" : "nav-menu"
            }>
                <ul>
                    <li><a href="/home">Home page</a></li>
                    <li><a href="/alex-town">Alexandra Township</a></li>
                    <li><a href="/pros-cons">Pros and Cons for Crowdfunding</a></li>
                    <li><a href="/probs">Problems and Recommendations</a></li>
                    <li><a href="/sites">Sites used for Crowdfunding</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;