import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Trigger from "../../assets/images/menu.png";

const Menu = (props) => {
  const [trigger, setTrigger] = useState(true);
  const items = [
    // { name: 'HOME', link: '/' },
    { name: "ABOUT US", link: "/aboutus" },
    { name: "OUR WORK", link: "/ourwork" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "contact" },
  ];

  // const items = [
  //   // { name: 'HOME', link: '/' },
  //   { name: 'About Us', link: '/underconstruction' },
  //   { name: 'Our Work', link: '/underconstruction' },
  //   { name: 'Services', link: '/underconstruction' },
  //   { name: 'Contact', link: '/underconstruction' },
  // ]
  return (
    <div>
      <div className="max-menu">
        <ul>
          {items.map((d, i) => {
            return (
              <li key={i}>
                <Link to={d.link}>{d.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`min-menu ${props.auxclass}`}>
        {trigger ? (
          <div
            className="trigger"
            onClick={() => {
              setTrigger(false);
            }}
          >
            <img alt="menu" src={Trigger} />
          </div>
        ) : (
          <div className="min-menu-items">
            <ul>
              {items.map((d, i) => {
                return (
                  <li key={i}>
                    {" "}
                    <Link to={d.link}>{d.name}</Link>
                  </li>
                );
              })}
              <li
                onClick={() => {
                  setTrigger(true);
                }}
              >
                Close menu
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
