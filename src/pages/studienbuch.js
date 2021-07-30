import { Accordion  } from "../components/Accordion";
import { ExamBox  } from "../components/ExamBox";

const semesterModules = [
  {
    semester: "WS 2019",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "",
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  {
    semester: "SS 2020",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  {
    semester: "WS 2020",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  {
    semester: "SS 2021",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  {
    semester: "WS 2021",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  {
    semester: "SS 2022",
    modulelist: 
    [
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
      {
        module: "Mathematische Grundlagen der Informatik",
        prof: "Schleip, Ekkehard",
        note: "1.0"
      },
    ]
  },
  
];

const anstehendeKlausuren = [
  {
    module: "Hardware - Grundlagen moderner Informationstechnik",
    datum: "20.07.2022",
    standort: "Düsseldorf"
  },
  {
    module: "Praxisprojekt I",
    datum: "20.07.2022",
    standort: "Düsseldorf"
  },
  {
    module: "Geschäftsprozessmodellierung",
    datum: "20.07.2022",
    standort: "Düsseldorf"
  }
]; 
const aktuelleKlausuren = [
  {
    module: "Hardware - Grundlagen moderner Informationstechnik",
    datum: "20.07.2022",
    standort: "Düsseldorf",
    note: "1.0"
  },
  {
    module: "Praxisprojekt I",
    datum: "20.07.2022",
    standort: "Düsseldorf",
    note: "1.0"
  },
  {
    module: "Geschäftsprozessmodellierung",
    datum: "20.07.2022",
    standort: "Düsseldorf",
    note: "1.0"
  }
];

export default function Studienbuch() {
    return (
    <div className="studienbuch">
      <h1 className="ueberschrift">Studienbuch</h1>
      <div class="top">
        <ExamBox art={true} examList={anstehendeKlausuren} /> 
        <ExamBox art={false} examList={aktuelleKlausuren} />   
      </div>
      <Accordion semesterModules={semesterModules} noteBool={true} />
    </div>);
  }