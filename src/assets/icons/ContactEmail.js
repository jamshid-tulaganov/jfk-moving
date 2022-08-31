import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={21}
            height={17}
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18.944 1H2.056C1.473 1 1 1.48 1 2.071V14.93C1 15.52 1.473 16 2.056 16h16.888c.583 0 1.056-.48 1.056-1.071V2.07C20 1.48 19.527 1 18.944 1z"
                stroke="#4E4E4E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 2l9.771 8L20 2"
                stroke="#4E4E4E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SvgComponent
