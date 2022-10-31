import React from "react";
import "../App.css";
import { Sidebar, SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
