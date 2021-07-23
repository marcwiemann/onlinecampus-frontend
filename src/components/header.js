import { Link } from "react-router-dom";
import {FiMessageSquare} from "react-icons/fi";
import profilePic from "./../images/titlebild_marc.jpg"

//Header komponente -> Suchleiste, Nachrichten und Profilbild werden angezeigt.
export const Header = () => {
   return(
<div className="Header">
        <input type="text" className="searchbar" placeholder="Search..."/>
        <div className="HeaderProfile">
                <FiMessageSquare />
               <Link to="/profile"><img src={profilePic} alt="text"/></Link>
        </div>
    </div>
   ) ;
}