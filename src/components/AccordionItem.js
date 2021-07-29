import React from "react";
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
  display,
  }) => {
    var arrow = ariaExpanded === "true" ? <IoIosArrowUp/> : <IoIosArrowDown/>;
    const modules = item.modulelist.map((item, index) => {
      var note = item.note === "" ? "Noch keine Note vorhanden" : item.note;

      return (
        <li>
              <h4 className="accordion_module_title">{item.module}</h4>
              <p className="accordion_prof">Lehrender: {item.prof}</p>
              <p className="accordion_note"> Note: {note}</p>
            </li>
      );
    });
  return (
    <div className={`semester_modules ${display}`} key={item.semester}>
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`semester${index + 1}_desc`}
          data-qa="semester-button"
          className={`semester-button ${fontWeightBold}`}
          onClick={onClick}
        >
         <span className ="buttonspan" >Semester {index+1} : {item.semester}</span> {arrow}
        </button>
        
      </dt>
      <dd>
      <div id={`semester${index + 1}_desc`}
        data-qa="semester_modules"
        className={`semester_modules_desc ${showDescription}`}>
          <ul>
            
        {modules}
        </ul>
        </div>
      </dd>
    </div>
  );}

export default AccordionItem;