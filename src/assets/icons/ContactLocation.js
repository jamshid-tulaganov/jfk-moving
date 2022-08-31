import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={19}
            height={27}
            viewBox="0 0 19 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.5 26.799a.95.95 0 01-.689-.295C8.455 26.124 0 17.142 0 9.699A9.629 9.629 0 019.5.2 9.629 9.629 0 0119 9.7c0 7.443-8.455 16.426-8.811 16.805a.95.95 0 01-.689.295zm0-24.7a7.703 7.703 0 00-7.6 7.6c0 5.535 5.61 12.45 7.6 14.73 1.99-2.28 7.6-9.203 7.6-14.725a7.704 7.704 0 00-7.6-7.605z"
                fill="#4E4E4E"
            />
            <path
                d="M9.5 13.499a3.8 3.8 0 110-7.601 3.8 3.8 0 010 7.6zm0-5.7a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8z"
                fill="#4E4E4E"
            />
        </svg>
    )
}

export default SvgComponent
