// IMPORTS

import React from 'react';
import { render } from 'react-dom';
import './styles/index/index.css';
import App from './components/app';


// GLOBALS

export const contentArray = {
  photos: [
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
  ],

  artworks: [
    {src: "https://i.ibb.co/gvBgY9X/1.jpg", alt: "First artwork", title: "First artwork"},
    {src: "https://i.ibb.co/99gnxjk/2.jpg", alt: "Second artwork", title: "Second artwork"},
    {src: "https://i.ibb.co/yBH6PHC/3.jpg", alt: "Third artwork", title: "Third artwork",},
    {src: "https://i.ibb.co/93SHWBz/4.jpg", alt: "Fourth artwork", title: "Fourth artwork"},
    {src: "https://i.ibb.co/BtMGmhH/5.jpg", alt: "Fifth artwork", title: "Fifth artwork"},
    {src: "https://i.ibb.co/Fg1PjYj/9.jpg", alt: "Sixth artwork", title: "Sixth artwork"},
    {src: "https://i.ibb.co/hYc8px8/10.jpg", alt: "Seventh artwork", title: "Seventh artwork"},
    {src: "https://i.ibb.co/KXgHmQV/11.jpg", alt: "Eighth artwork", title: "Eighth artwork"},
    {src: "https://i.ibb.co/YfxT2PY/12.jpg", alt: "Ninth artwork", title: "Ninth artwork"},
    {src: "https://i.ibb.co/zHh3z64/13.jpg", alt: "Tenth artwork", title: "Tenth artwork"},
    {src: "https://i.ibb.co/JpQdSQx/14.jpg", alt: "Eleventh artwork", title: "Eleventh artwork"}
  ]
};

export const menuOptions = [
  ["FEATURED", "LOGOS", "CONTACT"],                     // ARTWORK MODE OPTIONS
  ["FEATURED", "PEOPLE", "NATURE", "ACTS", "CONTACT"]   // PHOTO MODE OPTIONS
];


// RENDERING THE APP

render(<App />, document.querySelector("#root"));