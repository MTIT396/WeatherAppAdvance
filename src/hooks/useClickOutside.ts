import React, { useEffect, useRef } from "react";

type UseClickOutsideProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const useClickOutside = ({ setIsOpen }: UseClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.document.addEventListener("mousedown", handleClickOutside);
    return () =>
      window.document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);
  return ref;
};

export default useClickOutside;
