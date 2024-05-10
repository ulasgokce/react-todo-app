import { useState } from "react";

function useToggle(initialValue = false) {
    const [visible,setVisible] = useState(initialValue);
    
    function toggle() {
        setVisible((prevValue) => !prevValue);
    }
    
    return [visible, toggle];
    }

    export default useToggle;