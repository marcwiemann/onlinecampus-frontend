export default function Studienbuch() {
    return (
    <div className="studienbuch">
      <h1 className="ueberschrift">Studienbuch</h1>
      <div class="top"></div>
      <div className="klausurenKomponente anstehend box">
        <h2>Anstehende Prüfungen</h2>
        <h3 className="klausuren">Algorithmen und Datenstrukturen</h3><p className="note beschreibungKlausur">Standort Düsseldorf - Samstag, 31.07.2021</p>
        <h3 className="klausuren">Projektmanagement</h3><p className="note beschreibungKlausur">Samstag, 31.07.2021</p>
        <h3 className="klausuren">Prozedurale Programmierung</h3><p className="note beschreibungKlausur">Samstag, 31.07.2021</p>
      </div>
      <div className="klausurenKomponente aktuell box">
        <h2>Aktuelle Prüfungen</h2>
        <h3 className="klausuren">Hardware - Grundlagen moderner Informationstechnik</h3><p className="note beschreibungKlausur">1.0</p>
        <h3 className="klausuren">Geschäftsprozessmodellierung </h3><p className="note beschreibungKlausur">1.0</p>
        <h3 className="klausuren">Praxisprojekt I</h3><p className="note beschreibungKlausur">1.0</p>
      </div>
    </div>);
  }