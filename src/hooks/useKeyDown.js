import { useEffect, useRef } from "react";

export function useKeyDown(keyId, callbackfn) {

  const ref = useRef(null);

  useEffect(() => {

    const handleKeyDown = (e) => {
      if (e.key === keyId) {
        if (callbackfn) callbackfn(ref.current)
      };
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return ref;
}