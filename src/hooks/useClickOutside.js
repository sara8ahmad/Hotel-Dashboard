import { useEffect, useRef } from "react";

export function useClickOutside (close){
    const ref = useRef();

  useEffect( ()=> {
    const handleClick = (e) => {
      if(ref.current && !ref.current.contains(e.target)){
            close()
      }
    }

// when I made Click outside the modal on (Add cabin button) the event goes down in bubling phase to the button then in going up it will run the eventlisener on the model and will run close as the click is outside the model which will close the model immediately
    
    document.addEventListener("click" , handleClick , true)

    return ()=> document.removeEventListener('click' , handleClick )
  } , [close])
  
  return ref;
}