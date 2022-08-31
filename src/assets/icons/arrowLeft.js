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
        d="M16.723.61a2.083 2.083 0 00-2.946 0l-12.5 12.5a2.083 2.083 0 000 2.947l12.5 12.5a2.083 2.083 0 102.946-2.947L7.78 16.667h35.637a2.083 2.083 0 000-4.167H7.78l8.943-8.944a2.083 2.083 0 000-2.946z"
        fill="#AAA"
      />
    </svg>
  )
}

export default SvgComponent
