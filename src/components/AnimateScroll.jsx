'use client'
import React, { useRef, useEffect, useState } from 'react';
import 'animate.css';

export const AnimateScroll = ({ children, animation, id, classit }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      }, { threshold: 0.10 }); // Apakah sebagian dari elemen masuk dalam viewport
  
      observer.observe(elementRef.current);
  
      return () => {
        observer.disconnect(); // Menggunakan disconnect untuk menghentikan pemantauan
      };
    }, [hasAnimated]);
  
    useEffect(() => {
      if (isVisible) {
        elementRef.current.classList.add('animate__animated', animation);
      }
    }, [isVisible, animation]);
  
    return (
      <div id={id} ref={elementRef} className={classit}>
        {children}
      </div>
    );
};
