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
        d="M20.833 5.208H4.167c-.576 0-1.042.467-1.042 1.042v12.5c0 .576.466 1.042 1.042 1.042h16.666c.576 0 1.042-.466 1.042-1.042V6.25c0-.575-.466-1.042-1.042-1.042z"
        stroke="#81D2D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.125 6.25l9.643 7.292 9.107-7.292"
        stroke="#81D2D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
