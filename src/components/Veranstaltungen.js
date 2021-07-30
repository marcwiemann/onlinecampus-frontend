import React, {useState} from 'react';

export const Verantstaltungen = ({modulelist})  => {

    const modules = modulelist.map((item, index) => {
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
        
            <ul>
                {modules}
            </ul>
            );
};