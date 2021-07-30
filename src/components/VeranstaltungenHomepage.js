import React, {useState} from 'react';

export const VerantstaltungenHomepage = ({modulelist})  => {

    const modules = modulelist.map((item, index) => {
        return (
                <p className="accordion_module_title">{item.module}</p>
        );
      });
    return (<div>{modules}</div>);
};