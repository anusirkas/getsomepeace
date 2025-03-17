import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <div className="content-fit">
        {/* ✅ Keep "Get Some Peace" on the Left */}
        <div className="logo">
          <Link to="/" className="nav-link">Get Some Peace</Link>
        </div>

        {/* ✅ Keep Navigation Links on the Right */}
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => handleScroll("intro")} className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/cottages" className="nav-link">Cottages</Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleScroll("contact")} className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
