import { useState } from "react";
export let initialTextColor ="#52525b"
export const setInitialTextColor=(color)=>{
    initialTextColor=color;
}
export const useTextColor=()=>{
    const [textColor,setTextColor]=useState(initialTextColor);
    const changeTextColor=(color)=>
    {
        setInitialTextColor(color);
        setTextColor(color);
    }
    return [textColor,changeTextColor]
}
