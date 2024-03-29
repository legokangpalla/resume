import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// theme
// declare module "@material-ui/core/styles/createPalette" {
//   interface Palette {    
//     deepDark: Palette["primary"];
//   }
//   interface PaletteOptions {    
//     deepDark: PaletteOptions["primary"];
//   } 
// }



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
