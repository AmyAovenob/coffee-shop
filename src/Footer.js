import React from 'react';
// import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer text-faded text-center py-5">
            <div className="container">
                <p className="m-0 small">Copyright &copy; <a href='http://emeley.com/' target="_blank"><em>Amy_Aovenob</em></a> { new Date().getFullYear() }</p>
            </div>
        </footer>
    )
}

export default Footer