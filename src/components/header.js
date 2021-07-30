import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {FiMessageSquare} from "react-icons/fi";
import {IoIosMenu} from "react-icons/io";
import {IoCloseOutline} from "react-icons/io5";
import {FiSearch} from "react-icons/fi";
import profilePic from "./../images/titlebild_marc.jpg"


//Header komponente -> Suchleiste, Nachrichten und Profilbild werden angezeigt.
export const Header = ({onClick, activeBurger}) => {
   
   const burger = activeBurger===true ? <IoIosMenu/> : <IoCloseOutline/>;

   return(
   <div className="Header">
      <div className="burgerMenu">
         <button onClick={onClick}>{burger}</button>
         
      </div>
      <input type="text" className="searchbar" placeholder="Search..."/>
      <div className="HeaderProfile">
               <FiSearch className="searchIcon"/>
               <FiMessageSquare />
               <Link to="/profile"><img src={profilePic} alt="text"/></Link>
      </div>
    </div>
   ) ;
}