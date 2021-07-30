import React,  {useState}  from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "./components/header";
import {Sidebar} from "./components/sidebar";
import {MainPage} from "./components/main";

export default function App() {
  const [activeBurger, setActiveBurger] = useState(true);
  const showResponsiveNavigation = activeBurger === false? "resposiveDisplay" : "";
  return (
    <div className="bodyHome">
      <Router>
        <Header activeBurger={activeBurger}  onClick={() => {
            setActiveBurger(!activeBurger);
         }}/>
        <Sidebar showResponsiveNavigation={showResponsiveNavigation}/>
        <MainPage />
      </Router>
    </div>
  );
}
