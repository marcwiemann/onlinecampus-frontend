import React, {useState} from 'react';
import AccordionItem from './AccordionItem'

export const Accordion = ({semesterModules})  => {
    const [activeIndex, setActiveIndex] = useState(1);

    const accoordionItems = semesterModules.map((item, index) => {
      var secondColumn = -1;
      /*Damit bei kleinen Geräten wie Handys nur ein Accordion gleichzeitig aufgeklappt wird, bei Tablets und co wird ein Grid erstellt */
      if(window.innerWidth >600){
        var secondColumn = 0;
        if(activeIndex%2 == 0) secondColumn = activeIndex+1;
        else secondColumn = activeIndex-1;
      }
      
        const showDescription = index === activeIndex || secondColumn === index? "show-description" : "";
        const fontWeightBold = index === activeIndex || secondColumn === index ? "font-weight-bold" : "";
        const ariaExpanded = index === activeIndex || secondColumn === index? "true" : "false";
        const display = index % 2 == 0 ? "left": "right";
        return (
          <AccordionItem
            showDescription={showDescription}
            fontWeightBold={fontWeightBold}
            ariaExpanded={ariaExpanded}
            item={item}
            index={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            display={display}
          />
        );
    });

    return(
        <div className="accordion box">
            <h2 className="module_title"> Meine Module</h2>
            <dl className="semester_list">{accoordionItems}</dl>
        </div>
    )
}