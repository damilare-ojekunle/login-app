import { useState } from "react";
function useToggle(InitalVal = false) {
  const [state, setState] = useState(InitalVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
export default useToggle;
