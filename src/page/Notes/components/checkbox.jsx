import React from "react";

const Checkbox = ({onChange, value, label}) => {
    console.log({value})
    return (
        <div className='checkbox' onClick={onChange}>
             <input type='checkbox' checked={value}/>
            {label}
        </div>
    )
}

export default Checkbox;