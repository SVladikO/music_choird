import React from "react";
import { Wrapper } from "./checkbox.style";

const Checkbox = ({onChange, value, label}) => {
    console.log({value})
    return (
        <Wrapper onClick={onChange}>
             <input type='checkbox' checked={value}/>
            {label}
        </Wrapper>
    )
}

export default Checkbox;