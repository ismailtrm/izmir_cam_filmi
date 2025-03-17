'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  
  // Set the top coordinate to 0
  // Scroll smoothly to the top
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  
  useEffect(() => {
    // Initial check
    toggleVisibility();
    
    // Add scroll listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
    return undefined;
  }, []);
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-red-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors z-50"
          aria-label="Yukarı Çık"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
} 