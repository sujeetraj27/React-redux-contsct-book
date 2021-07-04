import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact
                </Link>
                <Link to="contacts/add" className="btn btn-light ml-auto bg-light"> Create Contact </Link>
            </div>
        </nav>
    );
}

export default Navbar;
