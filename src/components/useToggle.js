import React,{useCallback,useState} from 'react'

const useToggle = (initialState=false) => {
   const[state,setState]=useState(initialState);

   const toggleValue = ()=>{
      setState((prev)=>!prev);
      };
   return[state,toggleValue];
  };
  export default useToggle;
