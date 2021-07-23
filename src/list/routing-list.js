import Studienbuch from "./../pages/studienbuch";
import {Profile} from "./../pages/profile";
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Home</h2>,
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
  
  const persNav = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/studienbuch",
      name: "Studienbuch",
    },
    {
      to: "/veranstaltungen",
      name: "Verantstaltungen",
    },
    {
      to: "/termine",
      name: "Termine",
    },
    {
      to: "/online-klausuren",
      name: "Online Klausuren",
    },
  ];
  const katNav = [
    {
      to: "/literatur",
      name: "Literatur",
    },
    {
      to: "/beratung",
      name: "Beratung",
    },
    {
      to: "/einstellungen",
      name: "Einstellungen",
    },
  ];

  export {katNav,persNav,routes};