import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Reset active item when the location changes
    setActiveItem(null);

    const path = location.pathname;
    const index = navItems.findIndex((item) => item.to === path);

    // Set the active item if the path is not '/'
    if (path !== "/" && index !== -1) {
      setActiveItem(index);
    }
  }, [location.pathname]);

  const handleItemClick = (index) => {
    // Set active item if the current path is not '/'
    if (location.pathname !== "/") {
      setActiveItem(index);
    }
  };

  const navItems = [
    { to: "/avatar", label: "My Avatar" },
    { to: "/session", label: "1:1 Session" },
    { to: "/alarm", label: "Alarm" },
    { to: "/emergency", label: "Emergency Wait Times" },
  ];

  return (
    <nav className="nav">
      <div className="nav">
        <Link className="nav__link" to="/">
          <div className="nav__logo"></div>
        </Link>
        <ul className="nav__list">
          {navItems.map((item, index) => (
            <Link key={index} className="nav__link" to={item.to}>
              <li
                className={`nav__item ${
                  index === activeItem ? "nav__item-active" : "nav__item"
                }`}
                onClick={() => handleItemClick(index)}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Link className="nav__link" to="/login">
        <div className="nav__login">Login / Sign Up</div>
      </Link>
    </nav>
  );
};

export default Header;
