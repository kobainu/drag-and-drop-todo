import React from "react";
import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIcon />
      <ul className="sidebarList">
        {SidebarData.map((value, key) => {
          return (
            <>
              <Link
                to={value.link}
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = value.link;
                }}
                id={window.location.pathname === value.link ? "active" : ""}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </Link>
            </>
          );
        })}
      </ul>
    </div>
  );
};
