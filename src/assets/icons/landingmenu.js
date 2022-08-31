import * as React from "react"

function SvgComponent( props ) {
    return (
        <svg
            width={21}
            height={16}
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.468 9.139H5.8a1.139 1.139 0 110-2.278h13.668a1.139 1.139 0 110 2.278zM19.468 15.973H1.244a1.139 1.139 0 110-2.278h18.224a1.139 1.139 0 110 2.278zM1.244.027h18.224a1.139 1.139 0 110 2.278H1.244a1.139 1.139 0 110-2.278z"
                fill="#4E4E4E"
            />
        </svg>
    )
}

export default SvgComponent;
