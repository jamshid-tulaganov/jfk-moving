import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.56 21.06a1.5 1.5 0 01-2.12 0l-9-9a1.5 1.5 0 010-2.12l9-9a1.5 1.5 0 012.12 2.12L5.12 9.5H22.5a1.5 1.5 0 010 3H5.12l6.44 6.44a1.5 1.5 0 010 2.12z"
        fill="#333E63"
      />
    </svg>
  )
}

export default SvgComponent;