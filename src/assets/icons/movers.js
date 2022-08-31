import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={50}
      height={37}
      viewBox="0 0 50 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_24345_55)" fill="#F4AFBD">
        <path d="M42.848 13.554c0 4.984-3.387 9.009-7.527 9.009-4.14 0-7.528-4.025-7.528-9.009 0-4.983 3.387-9.009 7.528-9.009 4.14 0 7.527 4.026 7.527 9.01zM39.837 25.63h-9.221s-10.162-.575-10.162 10.734h29.734C50 25.054 39.838 25.63 39.838 25.63z" />
      </g>
      <g clipPath="url(#clip1_24345_55)" fill="#4E4E4E">
        <path d="M25.84 10.296c0 5.695-3.909 10.296-8.686 10.296s-8.685-4.6-8.685-10.296S12.377 0 17.154 0c4.777 0 8.686 4.6 8.686 10.296zM22.365 24.096H11.726S0 23.44 0 36.364h34.308c-.217-12.925-11.943-12.268-11.943-12.268z" />
      </g>
      <defs>
        <clipPath id="clip0_24345_55">
          <path
            fill="#fff"
            transform="translate(20.454 4.545)"
            d="M0 0H29.5455V31.8182H0z"
          />
        </clipPath>
        <clipPath id="clip1_24345_55">
          <path fill="#fff" d="M0 0H34.0909V36.3636H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
