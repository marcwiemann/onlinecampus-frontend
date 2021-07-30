import Studienbuch from "./../pages/studienbuch";
import {Profile} from "./../pages/profile";
import {Home} from "./../pages/home";

/*Icons */
import {MdLibraryBooks} from "react-icons/md";
import {GiOpenBook} from "react-icons/gi";
import {BiCalendarEvent} from "react-icons/bi";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {BsCalendar} from "react-icons/bs";
import {BsBook} from "react-icons/bs";
import {FiPhone} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      path: "/studienbuch",
  
      main: () => <Studienbuch />,
    },
    {
      path: "/veranstaltungen",
      main: () => <h2>Verantstaltungen</h2>,
    },
    {
      path: "/termine",
      main: () => <h2>Termine</h2>,
    },
    {
      path: "/online-klausuren",
      main: () => <h2>Online Klausuren</h2>,
    },
    {
      path: "/literatur",
      main: () => <h2>Literatur</h2>,
    },
    {
      path: "/beratung",
      main: () => <h2>Beratung</h2>,
    },
    {
      path: "/einstellungen",
      main: () => <h2>Einstellungen</h2>,
    },
    {
      path: "/profile",
      main: () => <Profile/>,
    },

  ];
  /*Persönlicher Reiter Navigation Items */
  const persNav = [
    {
      to: "/",
      name: "Home",
      icon: <BsFillHouseDoorFill/>,
    },
    {
      to: "/studienbuch",
      name: "Studienbuch",
      icon: <BsBook/>,
    },
    {
      to: "/veranstaltungen",
      name: "Verantstaltungen",
      icon: <BiCalendarEvent/>,
    },
    {
      to: "/termine",
      name: "Termine",
      icon: <BsCalendar/>,
    },
    {
      to: "/online-klausuren",
      name: "Online Klausuren",
      icon: <GiOpenBook/>,
    },
  ];
    /*Kategorie Reiter Navigation Items */
  const katNav = [
    {
      to: "/literatur",
      name: "Literatur",
      icon: <MdLibraryBooks/>,
    },
    {
      to: "/beratung",
      name: "Beratung",
      icon: <FiPhone/>,
    },
    {
      to: "/einstellungen",
      name: "Einstellungen",
      icon: <IoSettingsOutline/>,
    },
  ];

  export {katNav,persNav,routes};