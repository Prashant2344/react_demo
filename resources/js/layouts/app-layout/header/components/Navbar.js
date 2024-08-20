import React, { Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';

function Navbar() {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="navbar-list" id="userNavbar">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <Link className="navbar-brand" href={base_url + '/'}>
                                <img src="assets/image/logo-dark.png" alt=""/>
                            </Link>
                            <button className="navbar-toggler" id="navbar-togglercollapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-align-justify" aria-hidden="true"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav navbar-mid-section  mr-auto">
                                    <li className="nav-item active">
                                        <a href="" title="HR Management" className="submenu-reponsive">
                                            <img src="./assets/image/person-image.jpg" alt=""/>
                                            <span >HRM</span>
                                        </a>
                                        <Link href={base_url + '/category'} title="HR Management" className="submenu-web">
                                            <img src="./assets/image/person-image.jpg" alt=""/>
                                            <span >HR Management</span>
                                        </Link>

                                    </li>
                                    <li className="nav-item ">
                                        <Link href={base_url + '/test'} title="Inventory Management" className="submenu-web">
                                            <img src="./assets/image/dark-flower.jpg" alt=""/>
                                            <span >Account</span>
                                        </Link>
                                        <a href="" title="Inventory Management" className="submenu-reponsive">
                                            <img src="./assets/image/dark-flower.jpg" alt=""/>
                                            <span >IM</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <img src="./assets/image/health.jpg" alt=""/> <span>Health </span>

                                        <div className="dropdown-menu">
                                            <div className=" dropdown-inner-list">
                                                <ul className="link-list">
                                                    <li className="nav-item ">
                                                        <a href="https://www.facebook.com/" className="dropdown-nav-item">
                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                            <span>Schedule / Appointment </span>
                                                        </a>
                                                        <div className=" dropdown-menu sub-dropdown-menu">
                                                            <div className="sub-dropdown-inner-list">
                                                                <ul className="link-list">
                                                                    <li className="nav-item ">
                                                                        <a href="" className="subdropdown-nav-item">
                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                            <span>Schedule / Appointment </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="" className="subdropdown-nav-item">
                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                            <span>My Appointment History </span>
                                                                        </a>
                                                                        <div className=" dropdown-menu  sub-sub-dropdown-menu">
                                                                            <div className="sub-sub-dropdown-inner-list">
                                                                                <ul className="link-list">
                                                                                    <li className="nav-item ">
                                                                                        <a href="" className="sub-subdropdown-nav-item">
                                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                                            <span>Schedule / Appointment </span>
                                                                                        </a>
                                                                                        <div className=" dropdown-menu listsub-sub-dropdown-menu">
                                                                                            <div className="sub-sub-dropdown-inner-list">
                                                                                                <ul className="link-list">
                                                                                                    <li className="nav-item ">
                                                                                                        <a href="" className="listsub-subdropdown-nav-item">
                                                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                                                            <span>Schedule / Appointment </span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="nav-item">
                                                                                                        <a href="" className="listsub-subdropdown-nav-item">
                                                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                                                            <span>My Appointment History </span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="nav-item ">
                                                                                                        <a href="" className="listsub-subdropdown-nav-item">
                                                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                                                            <span>Schedule / Appointment </span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li className="nav-item">
                                                                                                        <a href="" className="listsub-subdropdown-nav-item">
                                                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                                                            <span>My Appointment History </span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li className="nav-item">
                                                                                        <a href="" className="sub-subdropdown-nav-item">
                                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                                            <span>My Appointment History </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="nav-item ">
                                                                                        <a href="" className="sub-subdropdown-nav-item">
                                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                                            <span>Schedule / Appointment </span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="nav-item">
                                                                                        <a href="" className="sub-subdropdown-nav-item">
                                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                                            <span>My Appointment History </span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="nav-item ">
                                                                        <a href="" className="subdropdown-nav-item">
                                                                            <i className="fa fa-user" aria-hidden="true"></i>
                                                                            <span>Schedule / Appointment </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="" className="subdropdown-nav-item">
                                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                                            <span>My Appointment History </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="dropdown-nav-item">
                                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                                            <span>My Appointment History </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item ">
                                        <Link href={base_url + '/contact'} title="Inventory Management" className="submenu-web">
                                            <img src="./assets/image/dark-flower.jpg" alt=""/>
                                            <span >Contact</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className=" " href="#">DearTeam</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="form-inline my-0 my-lg-0 " >
                            <ul className="user-navbar-nav navbar-last-section">
                                <li className="nav-item">

                                    <a href="" className="User-name-web">
                                        <img src="./assets/image/person-image.jpg" alt=""/>
                                        Welcome: <span>Bhawana Regmi</span>
                                    </a>
                                    <a href="" className="user-name-respon">
                                        <img src="./assets/image/person-image.jpg" alt=""/>
                                        Welcome: <span> BR</span>
                                    </a>

                                    <div className=" user-setting-dropdownMenuList">
                                        <div className="user-card-dropdown dropdown-inner">
                                            <div className="user-card-wrap ">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>BR</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text">Bhawana Regmi</span>
                                                        <span className="sub-text">info@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-inner dropdown-UserSetting-list">
                                            <ul className="link-list">
                                                <li className="nav-item usernav-item">
                                                    <a href="">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        <span>View Profile</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item usernav-item">
                                                    <a href="">
                                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                                        <span>user setting</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item usernav-item">
                                                    <a href="">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        <span>View Profile</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-inner dropdown-UserSetting-list">
                                            <ul className="link-list">
                                                <li className="nav-item usernav-item">
                                                    <a href="">
                                                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                                                        <span>Sign out </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href=""><i className="fa fa-bell-o" aria-hidden="true"></i><span className="notification-num"> 10</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;
