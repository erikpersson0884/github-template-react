import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


interface Page {
    url: string;
    linkText: string;
    visibleCriteria: boolean;
    className?: string;
}

const Header: React.FC = () => {
    const [ navOpen, setNavOpen ] = React.useState(false)


    const pages: Page[] = [
        { url: '/', linkText: 'Home Page', visibleCriteria: true },
    ];
    
    return (
        <header className="page-header">
            <div className="header-content">
                <Link to="/" onClick={() => setNavOpen(false)} >
                    <img className= "logo" src={"/favicon.svg"} height={100} alt="logo" />
                </Link>
            </div>

            <nav className={`header-nav ${navOpen ? 'nav-open' : ''}`}>
                {pages
                    .filter((page) => page.visibleCriteria)
                    .map((page) => (
                        <Link
                            to={page.url}
                            key={page.url}
                            onClick={() => setNavOpen(false)}
                            className={page.className || ''}
                        >
                            {page.linkText}
                        </Link>
                    ))}
            </nav>
        </header>
    )
}

export default Header
