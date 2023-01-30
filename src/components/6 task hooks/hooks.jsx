import { useEffect } from 'react';
import { useState } from 'react';
// лініва ініціаалізація для звернення до локалсторедж один раз
// для цього огортуємо функцію в обгортку

// загальна фунція що змінює усі параметри для перевикористання логіки, що прив'язана до ключів
// десеріалізація та серіалізація прописується для логіки

export const useLocalStorage = (
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
) => {
  const [state, setState] = useState(() => {
    return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);
  // тут прописуєшь те що необхідно повернути, отримати: об'єкт, масив, число....
  return [state, setState];
};