import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.166 21.875c0-2.877 3.731-5.209 8.333-5.209 4.603 0 8.334 2.332 8.334 5.209M12.5 13.542a5.208 5.208 0 100-10.417 5.208 5.208 0 000 10.417z"
        stroke="#81D2D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
