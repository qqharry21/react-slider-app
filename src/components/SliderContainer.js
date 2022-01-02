/** @format */

import React, { useState, useEffect } from 'react';
import data from '../data';
import Slider from './Slider';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
function SliderContainer() {
  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (currentIndex < 0) {
  //     setCurrentIndex(lastIndex);
  //   }
  //   if (currentIndex > lastIndex) {
  //     setCurrentIndex(0);
  //   }
  // }, [currentIndex, people]);

  const nextSlide = () => {
    setCurrentIndex(prevState => {
      let index = prevState + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setCurrentIndex(prevState => {
      let index = prevState - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  // auto-slide
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(prevState => {
        let index = prevState + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => {
          return (
            <Slider
              person={person}
              key={index}
              currentIndex={currentIndex}
              index={index}
              length={people.length}
            />
          );
        })}
        <button className='prev'>
          <FiChevronLeft onClick={prevSlide} />
        </button>
        <button className='next'>
          <FiChevronRight onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
}

export default SliderContainer;
