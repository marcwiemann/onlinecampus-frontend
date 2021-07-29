import React, {useState} from 'react';
import {Calendar} from "../components/Calendar"
export const Home = () => {

  const calendarItems = [
    {
      day: 2,
      art: "Vorlsung",
      datum: "27.7.2021",
      module: "Algorithmen und Datenstrukturen",
      startUhrzeit: "19:30",
      endUhrzeit: "21:00",
      adresse: {
        standort: "Düsseldorf",
        adresse: "Toulouser Alle 52",
        raum: "2-2b"
      },
      options: {
        link: "https://github.com/",
      },
    },
    {
      day:6,
      art: "Klausur",
      datum: "31.7.2021",
      module: "Algorithmen und Datenstrukturen",
      startUhrzeit: "10:30",
      endUhrzeit: "12:00",
      adresse: {
        standort: "Düsseldorf",
        adresse: "Toulouser Alle 52",
        raum: "2-2b"
      },
      options: {
        hilfsmittel: "",
      },
    }
  ];
  
    return (
      <div className="homepage">
        <h1 className="homepage_title">Hallo Marc!</h1>
        <h2 className="hompage_desc">Willkommen zurück, du hast 2 neue Nachrichten!</h2>
        
          <Calendar calendarItemsList={calendarItems} />
          
      </div>
    );
  }