// import React, { Children } from 'react';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
import './index.css';
// import paintings from ''

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'Word!' });

// const elem1 = <span>Hello</span>
// const elem2 = <span>Gues!</span>

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello Gues!'
// });

// const jsxElements = (
//   < div >
//   {elem1}
//   {elem2}
// </div>
// )


// console.log(jsxElements);


// ReactDOM.render(element, document.querySelector('#root'));

// create component
const data = {
  id: 'id-1',
  url: 'https://img1.akspic.ru/previews/6/4/7/9/6/169746/169746-planeta_devyat-zemlya-planeta-zhivopis-kosmos-x750.jpg',
  title: 'Fathers. Art abstract',
  price: 500,
  author: {
    tag: 'ractapopuluos',
    url: 'https://wallpapershome.ru/images/pages/pic_h/21485.jpg',
  },
  quantity: 10,
};



const painting = (
  <div>
    <img src={data.url} alt={data.title} width='200' height='300' />
    <h2>{data.title}</h2>
    <p>
      Author: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Price: {data.price} credits</p>
    <p>Accessibility: out of stock or in stock </p>
    <button type='button'>Add to cart</button>
  </div>
);

ReactDOM.render(painting, document.querySelector('#root'));

// function Painting(props) {
//   console.log(props)
//   return <div>
// <img src={props.url} alt={props.title} width='200' height='300' />
// <h2>{props.title}</h2>
// {/* <p>
//   Author: <a href={props.author.url}>{props.author.tag}</a>
// </p>
// <p>Price: {props.price} credits</p> */}
// <p>Accessibility: out of stock or in stock </p>
//     <button type='button'>Add to cart</button>
//   </div>
// };

// const painting = paintings[0];

// // props
// ReactDOM.render(
//   <Painting url={painting.url}
//     title={painting.title}
//     />,
//   document.querySelector('#root')
// );


