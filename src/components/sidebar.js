import {NavLink } from "react-router-dom";
import {DarkmodeSwitch} from './darkmodeSwitch';
import {katNav,persNav} from "./../list/routing-list";
import logo from "./../images/fom-logo.svg";

//Sidebar Komponente -> Routing zwischen verschieden Seiten wird hier durchgefuehrt
export const Sidebar = () =>  {
    return (
        <div className="nav">
          <img src={logo} alt="text" className="navlogo"></img>
          <h2>Online Campus</h2>
          <div className="navDiv">
            <h3>Persönliches</h3>
            {persNav.map((navItem, index) => (
              <NavLink exact activeStyle={{color: 'var(--fomgruen)', fontWeight:"bold"}} to={navItem.to} key={index}>{navItem.name} </NavLink>
            ))}
          </div>
          <div className="navDiv">
            <h3>Kategorie</h3>
            {katNav.map((navItem, index) => (
              <NavLink exact activeStyle={{color: 'var(--fomgruen)'}} to={navItem.to} key={index}>{navItem.name} </NavLink>
            ))}
          </div>
          <DarkmodeSwitch />
        </div>
    );
  }