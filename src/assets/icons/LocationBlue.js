import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={19}
            height={25}
            viewBox="0 0 19 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.924 15.522l6.738 8.916a1.054 1.054 0 001.68 0l6.737-8.916A9.503 9.503 0 0015.9 2.773a9.5 9.5 0 00-13.98 12.749h.003zm7.578-10.75a4.89 4.89 0 11-4.89 4.89 4.895 4.895 0 014.89-4.89z"
                fill="#81D2D3"
            />
        </svg>
    )
}

export default SvgComponent
