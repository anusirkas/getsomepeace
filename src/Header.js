import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      // ✅ Smooth scrolling with longer duration
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Adjusted to prevent cutting off section
          behavior: "smooth",
        });
      }
    } else {
      // ✅ Navigate first, then delay scrolling
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 800); // ✅ Increased delay to 800ms for smoother transition
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
              <button className="nav-link" onClick={() => handleScroll("intro")}>About</button>
            </li>
            <li>
              <Link to="/cottages" className="nav-link">Cottages</Link>
            </li>
            <li>
              <button className="nav-link" onClick={() => handleScroll("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
