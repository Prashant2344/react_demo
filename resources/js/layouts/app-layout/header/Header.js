import React, { Fragment } from 'react';
import Navbar from './components/Navbar';

function Header() {
    return (
        <Fragment>
            <div className="landing-page-navbar" id="top-header" >
                <div className="container-fluid">
                    <Navbar></Navbar>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
