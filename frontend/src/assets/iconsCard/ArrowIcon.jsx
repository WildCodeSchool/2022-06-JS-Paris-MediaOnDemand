import React from "react";
import "../AnimatedIcon.scss";

export const ArrowIcon = ({ colorIcon = "#ccc591" }) => {
  return (
    <svg
      className="animatedIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      version="1.1"
      viewBox="0 0 37.333 37.333"
    >
      <path
        fill={colorIcon}
        strokeWidth="1.333"
        d="M32.208 28.04C30.142 23.312 24.592 20 18.733 20c-3.542 0-4.066.47-4.066 3.647v3.647L9.02 21.647 3.373 16l5.647-5.647c4.845-4.846 5.647-5.248 5.647-2.837 0 2.229 1.06 2.98 5.132 3.63 2.823.452 6.68 2.038 8.57 3.525 3.72 2.926 6.749 10.278 6.06 14.71-.37 2.377-.678 2.191-2.22-1.34z"
      />
    </svg>
  );
};
