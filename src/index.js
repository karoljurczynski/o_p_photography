// IMPORTS

import React from 'react';
import { render } from 'react-dom';
import './styles/index/index.css';
import App from './components/app';


// GLOBALS

export const photosArray = [
  {src: "https://i.ibb.co/gvBgY9X/1.jpg", alt: "First photo", title: "First photo"},
  {src: "https://i.ibb.co/99gnxjk/2.jpg", alt: "Second photo", title: "Second photo"},
  {src: "https://i.ibb.co/yBH6PHC/3.jpg", alt: "Third photo", title: "Third photo",},
  {src: "https://i.ibb.co/93SHWBz/4.jpg", alt: "Fourth photo", title: "Fourth photo"},
  {src: "https://i.ibb.co/BtMGmhH/5.jpg", alt: "Fifth photo", title: "Fifth photo"},
  {src: "https://i.ibb.co/Fg1PjYj/9.jpg", alt: "Sixth photo", title: "Sixth photo"},
  {src: "https://i.ibb.co/hYc8px8/10.jpg", alt: "Seventh photo", title: "Seventh photo"},
  {src: "https://i.ibb.co/KXgHmQV/11.jpg", alt: "Eighth photo", title: "Eighth photo"},
  {src: "https://i.ibb.co/YfxT2PY/12.jpg", alt: "Ninth photo", title: "Ninth photo"},
  {src: "https://i.ibb.co/zHh3z64/13.jpg", alt: "Tenth photo", title: "Tenth photo"},
  {src: "https://i.ibb.co/JpQdSQx/14.jpg", alt: "Eleventh photo", title: "Eleventh photo"}
];


// RENDERING THE APP

render(<App />, document.querySelector("#root"));