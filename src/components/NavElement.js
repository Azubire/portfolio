import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { FaHome, FaInfo, FaCode, FaTools } from "react-icons/fa";

const List = [
  {
    name: "Home",
    to: "home",
    icon: <FaHome />,
  },
  {
    name: "Skills",
    to: "skills",
    icon: <FaTools />,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <FaCode />,
  },
  {
    name: "About",
    to: "about",
    icon: <FaInfo />,
  },
];

const NavElement = ({ className, showIcon, hide, show }) => {
  const [navList] = useState(List);
  const loc = useLocation();

  return (
    <>
      {navList.map((item, index) => {
        if (loc.pathname.match("/project-details/")) {
          return (
            <Link
              key={index}
              to={`/`}
              className={`li nav-link ${show && "mb-4"} ${className}`}
              onClick={(e) => {
                setTimeout(() => {
                  let page = document.getElementById(item.to);
                  const yOffset = -72;
                  const y =
                    page.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  show && hide();
                }, 0);
              }}
            >
              <i className="me-3 ">{showIcon && item.icon}</i>
              {item.name}
            </Link>
          );
        } else {
          return (
            <NavLink
              key={index}
              href={`${item.to}`}
              className={`li ${show && "mb-4"} ${className}`}
              onClick={(e) => {
                e.preventDefault();
                let page = document.getElementById(item.to);
                const yOffset = -72;
                const y =
                  page.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                show && hide();
              }}
            >
              <div className="d-flex align-items-center">
                <i className="me-3">{showIcon && item.icon}</i>
                <p className="p-0 m-0">{item.name}</p>
              </div>
            </NavLink>
          );
        }
      })}
    </>
  );
};

export default NavElement;
