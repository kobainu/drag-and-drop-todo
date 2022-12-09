import React from "react";
// import Icon from "../images/user_icon";

export const SidebarIcon = () => {
  const userName = "Daishi Kobayashi";

  return (
    <div className="sidebarIcon">
      {/* <img src={Icon} alt="user_icon" /> */}
      <p>{userName}</p>
      <p>sample@gmail.com</p>
    </div>
  );
};
