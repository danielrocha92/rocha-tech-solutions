import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = (headerHeight) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [location, headerHeight]);
};

export default useScrollToHash;