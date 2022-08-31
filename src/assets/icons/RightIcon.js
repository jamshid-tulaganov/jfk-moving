import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1 1l4 4-4 4"
                stroke="#3B3B69"
                strokeWidth={1.41427}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SvgComponent
