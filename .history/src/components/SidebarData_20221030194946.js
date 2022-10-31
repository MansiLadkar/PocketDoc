import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

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
    icon: <LocalHospitalIcon />,
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
