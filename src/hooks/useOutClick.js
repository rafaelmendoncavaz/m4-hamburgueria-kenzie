import { useEffect, useRef } from "react";

export function useOutClick(callbackfn) {

  const ref = useRef(null);

  useEffect(() => {
    const handleOutClick = (e) => {

      if (!ref.current?.contains(e.target)) {
        if (callbackfn) callbackfn()
      };
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    }

  }, [])

  return ref;
}