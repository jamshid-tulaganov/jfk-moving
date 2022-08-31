import * as React from "react";


function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.374 16.125c0 2.25-.125 4.25-.375 6-.333 1.75-.917 3.208-1.75 4.375-.833 1.25-2.042 2.167-3.625 2.75-1.583.583-3.708.875-6.375.875h-1V24.25h1.625c1.417 0 2.458-.417 3.125-1.25.583-.833.875-2.375.875-4.625v-1.5h-5.625V.5h13.125v15.625zm-17.875 0c0 2.25-.125 4.25-.375 6-.333 1.75-.917 3.208-1.75 4.375-.833 1.25-2.042 2.167-3.625 2.75-1.583.583-3.708.875-6.375.875h-1V24.25h1.625c1.417 0 2.458-.417 3.125-1.25.583-.833.875-2.375.875-4.625v-1.5H.374V.5h13.125v15.625z"
        fill="#DDD"
      />
    </svg>
  );
}
SvgComponent.defaultProps = {
  width: 32,
  height: 31
}

export default SvgComponent;
