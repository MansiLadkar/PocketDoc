import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Doctor",
    icon: <PersonIcon />,
    link: "/FindDoctor",
  },
  {
    title: "Hospital",
    icon: <HomeIcon />,
    link: "/FindHospital",
  },
  {
    title: "Ambulance",
    icon: <HomeIcon />,
    link: "/FindAmbulance",
  },
  {
    title: "Labtest",
    icon: <HomeIcon />,
    link: "/FindLabtest",
  },
];
