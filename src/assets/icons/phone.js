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
        d="M7.34 2.5H4.474c-1.09 0-1.974.884-1.974 1.974 0 9.265 7.511 16.776 16.776 16.776 1.09 0 1.974-.884 1.974-1.974V16.41c0-.851-.519-1.617-1.31-1.934l-2.745-1.098a2.083 2.083 0 00-2.107.334l-.71.59a2.083 2.083 0 01-2.807-.127L9.574 12.18a2.083 2.083 0 01-.127-2.807l.591-.71c.49-.587.618-1.396.334-2.107L9.274 3.81A2.083 2.083 0 007.34 2.5z"
        stroke="#81D2D3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
