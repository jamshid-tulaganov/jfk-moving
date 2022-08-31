import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#A8324A" />
      <path
        d="M14.41 24.477V8.633h3.152v15.844H14.41zm-6.34-6.352v-3.152h15.844v3.152H8.07z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
