/** @format */

import React from 'react';

import { FaQuoteRight } from 'react-icons/fa';
function Slider({ person, currentIndex, index, length }) {
  // index is the index of the current person
  // currentIndex is the index of the person that is currently being displayed
  const { id, image, name, title, quote } = person;
  let position = 'nextSlide';
  if (index === currentIndex) {
    position = 'activeSlide';
  }
  if (index === currentIndex - 1 || (currentIndex === 0 && index === length - 1)) {
    position = 'lastSlide';
  }
  return (
    <article className={position}>
      <img src={image} alt={name} className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
}

export default Slider;
