import { useState } from "react";
export let initialContentColor = "#000000"
export let setInitialContentColor=(color)=>
{
    initialContentColor=color;
}
export const useText=()=>{
    const [contentColor,setContentColor]=useState(initialContentColor);
    const changeContentColor=(color)=>
    {
        setInitialContentColor(color);
        setContentColor(color);
    }
    return[contentColor,changeContentColor]
}