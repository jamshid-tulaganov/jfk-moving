import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx={10} cy={10} r={10} fill="#447E7F" />
            <circle cx={10} cy={10} r={4} fill="#fff" />
        </svg>
    )
}

export default SvgComponent
