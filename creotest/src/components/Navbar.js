import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link class="nav-link active" to="#">Home <span class="sr-only">(current)</span></Link>
            <Link class="nav-link" to="#">Features</Link>
            <Link class="nav-link" to="#">Pricing</Link>
            <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;