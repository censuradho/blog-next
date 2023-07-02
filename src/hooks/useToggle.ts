import { useState } from "react";

export function useToggle (defaultState: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(defaultState)

  const toggle = () => setState(prevState => !prevState)
  

  return [state, toggle]
}