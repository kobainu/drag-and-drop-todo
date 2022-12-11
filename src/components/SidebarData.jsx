import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "マイタスク",
    icon: <HomeIcon />,
    link: "/my_task",
  },
  {
    title: "メンバー",
    icon: <Diversity3Icon />,
    link: "/member",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/setting",
  },
];
