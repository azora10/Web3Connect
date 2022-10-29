import React, { useState } from 'react';
import logoName from '../assets/images/silverline.png';
import logo from '../assets/images/silverlinelogo.png';
import sideNavLogo from '../assets/images/menu-line.png';
import closeNav from '../assets/images/close-fill.png';
import '../styles/Header.css';

import WalletConnectProvider from "@walletconnect/web3-provider";

const Header = () => {

    const [sidenav, setSidenav] = useState(false);
    const [sideLogo, setSideLogo] = useState(sideNavLogo);

    const popNav = () => {
        setSidenav(!sidenav);
        if (sidenav) {
            setSideLogo(sideNavLogo);
        } else {
            setSideLogo(closeNav);
        }
    };

    var walletConnect = async () => {

        const provider = new WalletConnectProvider({
            infuraId: "7caeec2397264ba196553d90cacd5d0b",
        });

        await provider.enable();
    };



    return (
        <div>
            <nav className="navbar navbar-default navbar-expand-lg">
                <div className="container-fluid">
                    <a href='http://www.silverlineswap.org/#/' className="navbar-brand">
                        <img src={logo} alt="" />
                        <img src={logoName} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={popNav} data-bs-toggle="collapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={sideLogo} alt="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='#' className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Launcing Soon</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Partners</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">FAQ</a>
                            </li>
                            <button className='connectBtn' onClick={walletConnect}>
                                Connect
                            </button>
                        </ul>
                    </div>
                    {sidenav && <div className="sideNavMain">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Launcing Soon</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Partners</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">FAQ</a>
                            </li>
                            <button className='connectBtn' onClick={walletConnect} >
                                Connect
                            </button>
                        </ul>
                    </div>}
                </div>
            </nav>

        </div>

    );
};

export default Header;
