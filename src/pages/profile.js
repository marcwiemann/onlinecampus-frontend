import {FiCamera} from "react-icons/fi";
import {BiUser} from "react-icons/bi";
import {BsCalendar} from "react-icons/bs";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {FiFlag} from "react-icons/fi";
import {GiFinishLine} from "react-icons/gi";
import profilePic from "./../images/titlebild_marc.jpg"

export const Profile = () =>  {
    return (
        <div className="profilePage box">
            <div className="top">
                <div className="portrait">
                    <div className="image-overlay">
                        <img src={profilePic} alt="Profile Picture"/>
                        <FiCamera />
                    </div>
                </div>
                <div className="aboutProfile">
                    <h2 className="profileName">Marc Wiemann (532455)</h2>
                    <h3 className="studiengang">Bachelor of Science Informatik / BIT WS19 D</h3>
                    <h3>Wintersemester 2019</h3>
                </div>
                <div className="bearbeiten">
                    <input type="submit" value="Bearbeiten"/>
                </div>
            </div>
            <div className="profileMain">
                
                <div className="userinfo ">
                    <h3>Persönliches</h3>
                            <p className="aboutList"><BiUser/> Männlich</p>
                            <p className="aboutList"><BsCalendar/> 20.09.1999</p>
                            <p className="aboutList"><BsFillHouseDoorFill/> Neuss</p>
                            <p className="aboutList"><FiFlag/> Deutsch</p>
                            <p className="aboutList"><GiFinishLine/> 28.02.2023</p>
                </div>
                <div className="adressen ">
                    <h3>Adressen</h3>
                    <div className="adresstyp">
                        <h4>Kaiser-Wilhelm-Straße 100</h4>
                        <p>47166 Duisburg, Deutschland</p>
                        <p>Rechnungsanschrift</p>
                    </div>
                    <div className="adresstyp">
                        <h4>Eifeler Straße 2</h4>
                        <p>40227 Düsseldorf, Deutschland</p>
                        <p>Anschrift</p>
                    </div>
                </div>
                <div className="downloads">
                    <h3>Downloads</h3>
                    <p><a href="#">Nachweis</a></p>
                    <p><a href="#">Immatrikulationsbescheinigung</a></p>
                    <p><a href="#">Exmatrikulationsbescheinigung</a></p>
                    <p><a href="#">Rechnungen</a></p>
                    <p><a href="#">Zahlungsvereinbarungen</a></p>
                </div>
            </div>
        </div>
    );
  }