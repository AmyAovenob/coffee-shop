import React from 'react';
import { NavLink } from 'react-router-dom'

const navStyle = {
    color: '#e6a756'
}


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to="/">Start Bootstrap</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4">
                            <NavLink activeStyle= { navStyle } className="nav-link text-uppercase text-expanded" to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink activeStyle= { navStyle } className="nav-link text-uppercase text-expanded" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink activeStyle= { navStyle } className="nav-link text-uppercase text-expanded" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink activeStyle= { navStyle } className="nav-link text-uppercase text-expanded" to="/store">Store</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav