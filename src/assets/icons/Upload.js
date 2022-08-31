import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={47}
            height={38}
            viewBox="0 0 47 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M32 27l-8-8-8 8M24 19v18"
                stroke="#447E7F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40.78 31.78A10 10 0 0036 13h-2.52A16.001 16.001 0 106 27.6"
                stroke="#447E7F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M32 27l-8-8-8 8"
                stroke="#447E7F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SvgComponent
