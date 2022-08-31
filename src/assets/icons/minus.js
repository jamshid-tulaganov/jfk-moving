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
            <circle cx={16} cy={16} r={16} fill="#F4AFBD" />
            <path d="M20.96 15.34v3.035H10.32V15.34h10.64z" fill="#fff" />
        </svg>
    )
}

export default SvgComponent
