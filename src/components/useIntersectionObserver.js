// useIntersectionObserver.js
import { useEffect } from 'react';

const useIntersectionObserver = (options) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.ingredient-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);
};

export default useIntersectionObserver;
