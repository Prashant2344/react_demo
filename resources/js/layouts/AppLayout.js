import React, { Fragment } from 'react';
import Header from './app-layout/header/Header';

function AppLayout(props) {
    return (
        <Fragment>
            <Header></Header>
            <div className="landing-page" id="landing-page">
                <div className="container-fluid">
                    <div className="lnw-body-dashboard" >
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppLayout;
