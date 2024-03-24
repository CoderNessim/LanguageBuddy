import { useState, useEffect } from 'react';

/**
 * 
 * @param {*} initialState: initial state of the flashcards 
 * @param {*} keyName: key to store the flashcards in local storage 
 * @summary This hook is used to store the flashcards in local storage
 */
export function useLocalStorage(initialState, keyName) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(keyName, JSON.stringify(value));
    },
    [value, keyName]
  );

  return [value, setValue];
}
