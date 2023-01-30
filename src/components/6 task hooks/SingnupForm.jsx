import {useLocalStorage} from './hooks'



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
