import React from 'react';
import './Counter.css';

// import { Value } from './Value';
import { useState, useEffect } from 'react';

export const CounterHuki = () => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

// функції оновлення стану у залежності від попереднього
    const handleCounterAIncriment = () => {
        setCounterA(prevState => prevState + 1);
    }
    const handleCounterBIncriment = () => {
        setCounterB(prevState => prevState + 1);
    }
// якщо не передавати другий аргумент тоді функція буде спрацьовувати при кожній зміні
// state або props, тобто буде постійно виконуватися
// ЗАВЖДИ ПЕРЕДАЄТЬСЯ АНОНІМНА ФУНКЦІЯ!!!
    // useEffect(() => {
    //     console.log('GO EFFECT')
    // },)

// якщо другим аргументом передати пустий масив то ця функціятзапуститься лише один раз при першому регдері
// і більше ніколи, оскільки відсутні залежності
    // useEffect(() => {
    //     console.log('GO EFFECT')
    // }, [])
// якщо передати залежності тоді функція буде спрацьовувати лише тоді коли буде змінюватися
// передане значення в масиві, наприклад - при зміні counterA.
// Також можна передавати декілька змінних
// це позбавляє необхідності робити перевірки
    // useEffect(() => {
    //     console.log('GO EFFECT')
    // }, [counterA, counterB])

// також можна прописувати умови для відпрацювання більш складніші
// pfvsy.' componentDidMount, componentDidUpdate
// наприклад:
    useEffect(() => {
        console.log('!!!!!')
        const totalClick = counterA + counterB;
        document.title = `All clicks ${totalClick}!`
     }, [counterA, counterB])

  return (
    <div className="Counter">
          <button
              className="Counter__controls"
              type='button'
              onClick={handleCounterAIncriment}>
              Click {counterA}!
          </button>
          <button
              className="Counter__controls"
              type='button'
              onClick={handleCounterBIncriment}>
              Click {counterB}!
          </button>
    </div>
  );
};
