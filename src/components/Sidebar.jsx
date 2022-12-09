import React from "react";
import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIcon />
      <ul className="sidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
              id={window.location.pathname === value.link ? "active" : ""}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
