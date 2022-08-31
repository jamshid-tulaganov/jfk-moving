import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={25}
            height={16}
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 13.507a7.5 7.5 0 01-4.918 1.832C3.394 15.34 0 11.906 0 7.67 0 3.435 3.394 0 7.582 0A7.5 7.5 0 0112.5 1.833 7.5 7.5 0 0117.42 0C21.606 0 25 3.434 25 7.67s-3.394 7.67-7.581 7.67a7.5 7.5 0 01-4.919-1.833z"
                fill="#ED0006"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 13.508a7.69 7.69 0 002.664-5.838A7.69 7.69 0 0012.5 1.832 7.5 7.5 0 0117.418 0c4.187 0 7.581 3.434 7.581 7.67s-3.394 7.67-7.581 7.67a7.5 7.5 0 01-4.918-1.832z"
                fill="#F9A000"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.498 1.833a7.69 7.69 0 012.664 5.837 7.69 7.69 0 01-2.664 5.837A7.69 7.69 0 019.835 7.67a7.69 7.69 0 012.663-5.837z"
                fill="#FF5E00"
            />
        </svg>
    )
}

export default SvgComponent
