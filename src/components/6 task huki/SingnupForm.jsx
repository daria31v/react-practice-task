import { useEffect } from 'react';
import { useState } from 'react';

// лініва ініціаалізація для звернення до локалсторедж один раз
// для цього огортуємо функцію в обгортку

// загальна фунція що змінює усі параметри для перевикористання логіки, що прив'язана до ключів
// десеріалізація та серіалізація прописується для логіки
const useLocalStorage = (
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

export const SingnupForm = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  // приклад функції оновлення для усіх параментрів state
  const handleChangeAll = e => {
    console.log(e.target.name);
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  // функції для окремих переметрів
  //   useEffect(() => {
  //     console.log('email useEffect');
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }, [email]);
  //   useEffect(() => {
  //     console.log('password useEffect');
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }, [password]);

  return (
    <form>
      <label>
        <span>MAIL</span>
        <input
          type="email"
          name="email"
          onChange={handleChangeAll}
          value={email}
        />
      </label>

      <label>
        <span>PASSWORD</span>
        <input
          type="password"
          name="password"
          onChange={handleChangeAll}
          value={password}
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
};
