import React from 'react';
/*@art: boolean == true -> Anstehende Klausuren, false -> aktuelle Klausuren */
export const ExamBox = ({art, examList}) => {
    const artClassNameString = art ? "anstehend" : "aktuell";
    const artString = art ? "Anstehende" : "Aktuelle";
    //ExamListe auflösen
    const examItems = examList.map((exam, index) => {
      var listHtml = "";
      if(art === true) {
        listHtml = (
          <div>
              <h3 className="examBoxModulName">{exam.module}</h3>
              <p className="examBoxDatum">{exam.datum} - </p> 
              <p className="examBoxStandort">Standort {exam.standort}</p>
          </div>
        );
      }
      else {
        listHtml = (
          <div>
              <h3 className="examBoxModulName">{exam.module}</h3>            
              <p className="examBoxDatum">{exam.datum} - </p>
              <p className="examBoxStandort">Standort {exam.standort}</p>
              <p className="examBoxNote">{exam.note}</p>
          </div>
        );
      }
      return listHtml;
    });

    return(<div className={`klausurenKomponente ${artClassNameString} box`}>
    <h2>{artString} Prüfungen</h2>
    {examItems}
  </div>)
}