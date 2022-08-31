import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={46}
      height={30}
      viewBox="0 0 46 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.277.61a2.083 2.083 0 012.946 0l12.5 12.5a2.083 2.083 0 010 2.947l-12.5 12.5a2.083 2.083 0 11-2.946-2.947l8.943-8.943H2.583a2.083 2.083 0 010-4.167H38.22l-8.943-8.944a2.083 2.083 0 010-2.946z"
        fill="#AAA"
      />
    </svg>
  )
}

export default SvgComponent
