import React from "react";
import "../AnimatedIcon.scss";

export const HeartIcon = (props) => {
  return (
    <svg
      className="animatedIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="45.333"
      height="42.667"
      version="1.1"
      viewBox="0 0 45.333 42.667"
      {...props}
    >
      <g>
        <path
          fill="#fe0000"
          strokeWidth="1.333"
          d="M14.983 35.183C3.297 25.385-.672 12.55 5.94 5.939 9.801 2.077 16.58 1.572 20.23 4.873c2.268 2.054 2.607 2.054 4.876 0 3.648-3.301 10.427-2.796 14.289 1.066 4.07 4.071 4.318 10.784.662 17.952-2.968 5.818-14.016 16.122-17.244 16.083-1.18-.014-4.703-2.17-7.829-4.791z"
        />
      </g>
    </svg>
  );
};
