// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // 2 task
// // import { App } from 'components/2 task/App';
// // 1 task
// // import {App} from 'components/StickerList/App'
// //3 task
// import { App } from './components/3 task - stickerFormAdd/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// 3 task

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/3 task - stickerFormAdd/App';
import { GlobalStyle } from 'components/3 task - stickerFormAdd/GlobalStyle';
import stickers from './stickers.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialStickers={stickers} />
    <GlobalStyle />
  </React.StrictMode>
);