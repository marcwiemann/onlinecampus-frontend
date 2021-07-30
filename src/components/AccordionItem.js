import React from "react";
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
import {Verantstaltungen} from "./Veranstaltungen";
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
            <Verantstaltungen modulelist={item.modulelist}/>
        </div>
      </dd>
    </div>
  );}

export default AccordionItem;