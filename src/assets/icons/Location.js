import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={24}
            height={30}
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.35 18.6l8.23 10.89a1.287 1.287 0 002.05 0l8.23-10.89A11.606 11.606 0 0019.42 3.03 11.604 11.604 0 002.347 18.6h.003zm9.255-13.129a5.973 5.973 0 11-5.972 5.973 5.979 5.979 0 015.972-5.973z"
                fill="#fff"
            />
        </svg>
    )
}

export default SvgComponent
