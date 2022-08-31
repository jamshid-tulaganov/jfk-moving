import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={8}
      height={18}
      viewBox="0 0 8 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.517 8.68h-2.36v8.402H1.663V8.68H0V5.714h1.662V3.79c0-1.375.653-3.525 3.526-3.525l2.59.01v2.883h-1.88c-.306 0-.742.15-.742.808v1.747h2.666L7.516 8.68l.001-.001z"
        fill="#FEFEFE"
      />
    </svg>
  );
}

export default SvgComponent;
