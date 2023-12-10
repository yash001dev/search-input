import { useEffect, useState } from "react";

export const useDebounce = (searchValue, delay) => {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue, delay]);

  return { debounceValue };
};
