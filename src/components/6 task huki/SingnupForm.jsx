import { useState } from 'react'

export const SingnupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleChangeEmail = e => {
    //     setEmail(e.target.value);
    // };

    // const handleChangePassword = e => {
    //     setPassword(e.target.value)
    // };

    // приклад функції оновлення для усіх параментрів state 
    
    const handleChangeAll = e => {
        console.log(e.target.name);
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword (value);
                break;
            default:
                return;
        }
    }

    return (
        <form>
            <label>
                <span>MAIL</span>
                <input type='email' name='email' onChange={handleChangeAll} value={email}
                />
            </label>

            <button type="submit">Registration</button>
            <label>
                <span>PASSWORD</span>
                <input type='password' name='password' onChange={handleChangeAll} value={password}
                />
            </label>

        </form>
    );
}