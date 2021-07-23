import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "./components/header";
import {Sidebar} from "./components/sidebar";
import {MainPage} from "./components/main";

export default function App() {
  return (
    <div className="bodyHome">
      <Router>
      <Header />
        <Sidebar />
        <MainPage />
      </Router>
    </div>
  );
}
