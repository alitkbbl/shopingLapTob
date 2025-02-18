import React from 'react';

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} absolute top-1/2 right-4 z-12 transform -translate-y-1/2 bg-blue-500 p-6 mr-10 rounded-full text-white cursor-pointer hover:scale-110 transition-transform duration-200`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} absolute top-1/2 left-4 ml-12  z-10 transform -translate-y-1/2 bg-blue-500 p-6 rounded-full text-white cursor-pointer hover:scale-110 transition-transform duration-200`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
