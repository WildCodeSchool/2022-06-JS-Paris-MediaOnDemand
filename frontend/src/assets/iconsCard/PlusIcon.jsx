import React from "react";

export const PlusIcon = ({ colorIcon = "#ccc591" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      version="1.1"
      viewBox="0 0 37.333 37.333"
    >
      <path
        fill={colorIcon}
        strokeWidth="1.333"
        d="M10.35 32.58C.172 27.056.338 10.007 10.623 4.69c11.206-5.796 24.044 1.667 24.044 13.977 0 12.328-13.257 19.913-24.317 13.912zm10.732-8.27c.252-1.709 1.56-2.976 3.333-3.228 1.605-.228 2.918-1.315 2.918-2.415s-1.313-2.187-2.918-2.416c-1.818-.258-3.074-1.515-3.333-3.333-.54-3.79-4.291-3.79-4.83 0-.26 1.818-1.516 3.075-3.334 3.333-3.833.546-3.77 4.295.082 4.842 1.816.258 3 1.354 3 2.778 0 4.938 4.362 5.316 5.082.44z"
      />
    </svg>
  );
};