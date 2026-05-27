import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const navItems = [
    { label: 'Home', to: '/', end: true },
    { label: 'Services', to: '/services' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg main-header">
        <div className="container site-container">
          <div className="nav-layout">
            <Link className="navbar-brand logo-text" to="/">
              <img src="/logo.svg" alt="CloudKodeForm" width="150" height="50" />
            </Link>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Open menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="menu-wrapper d-none d-lg-flex">
              <ul className="navbar-nav main-menu">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.to}>
                    <NavLink className="nav-link" to={item.to} end={item.end}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="header-btn">
                <Link to="/contact" className="theme-btn">
                  Get In Touch
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div
              className="offcanvas offcanvas-start mobile-menu d-lg-none"
              tabIndex="-1"
              id="mobileMenu"
              aria-labelledby="mobileMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="mobileMenuLabel">Navigation</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav main-menu-mobile">
                  {navItems.map((item) => (
                    <li className="nav-item" key={item.to}>
                      <NavLink
                        className="nav-link"
                        to={item.to}
                        end={item.end}
                        data-bs-dismiss="offcanvas"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="header-btn">
                  <Link to="/contact" className="theme-btn" data-bs-dismiss="offcanvas">
                    Get In Touch
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
