import {useEffect, useState} from 'react';

export function useDebounce(search: string, timeout = 2000) {
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timeoutFunction = setTimeout(() => {
      setDebouncedSearch(search);
    }, timeout);

    return () => {
      clearTimeout(timeoutFunction);
    };
  }, [timeout, search]);

  return debouncedSearch;
}