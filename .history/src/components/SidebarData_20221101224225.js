import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Doctor",
    icon: <PersonIcon />,
    link: "/Dashboard/Doctors/FindDoctors",
  },
  {
    title: "Hospital",
    icon: <LocalHospitalIcon />,
    link: "/Dashboard/Hospitals/FindHospitals",
  },
  {
    title: "Ambulance",
    icon: <DirectionsBusIcon />,
    link: "/Dashboard/Ambulance/FindAmbulance",
  },
  {
    title: "Labtest",
    icon: <NoteAltIcon />,
    link: "/Dashboard/Labtest/FindLabtest",
  },
];
