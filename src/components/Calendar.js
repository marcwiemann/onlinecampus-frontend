import React, {useState} from 'react';


export const Calendar = ({calendarItemsList}) => {
    const [activeIndex, setActiveIndex] = useState(1);

    function getWeekDates (date){
        const currentDate = new Date();
        var locale = "de-DE";
        var listDates = [];
        for(var i = 0; i <7; i++){
          var d = new Date(currentDate.setDate(date+i));
          var weekDay = new Intl.DateTimeFormat(locale, {weekday :'long'}).format(d);
          var stringDate = d.toLocaleDateString(locale);
          var obj = {
            "stringDate": stringDate,
            "weekDay":  weekDay,
          };
          listDates.push(obj); 
    
        }
        return listDates;
      }
      const currentDate = new Date();
      var first = currentDate.getDate() - currentDate.getDay()+1;
      var weekList = getWeekDates(first);
      var thList = weekList.map((item, index) => {
        return (<th><h3 className="tag">{item.weekDay}</h3><span className="Datum">{item.stringDate}</span></th>);
      });
      
      const calendarItems = [
        <td></td>, 
        <td></td>, 
        <td></td>, 
        <td></td>, 
        <td></td>, 
        <td></td>, 
        <td></td>, 
      ];
      
      calendarItemsList.forEach((item, index) => {
          calendarItems[item.day-1] = (
          <td><button onClick={() => {
            setActiveIndex(index);
          }} id={`calendarEintrag_${index}`} className="calendarEintrag">
              <span className="calendarEintragArt">{item.art}</span><br/>
              <span className="calendarEintragZeit">{item.startUhrzeit} - {item.endUhrzeit}</span></button></td>);
      });
    
      return(
        <div className="top">
        <div className="calendar box">
        <table>
          <tr className="trHeader">
            {thList}
          </tr>
          <tr className="trEintrag">
              {calendarItems}
          </tr>
        </table>
      </div>
      <div className="calendar_information box">
          <h2>Informationen</h2>
          <h3>{calendarItemsList[activeIndex].art}</h3>
          <p>{calendarItemsList[activeIndex].module}</p>
          <p className="inlineDate">{calendarItemsList[activeIndex].datum} -  {calendarItemsList[activeIndex].startUhrzeit} bis {calendarItemsList[activeIndex].endUhrzeit} Uhr</p>
          <p className="inlineOrt">FOM {calendarItemsList[activeIndex].adresse.standort} - {calendarItemsList[activeIndex].adresse.adresse}</p>
      </div>
        </div>
      );
}