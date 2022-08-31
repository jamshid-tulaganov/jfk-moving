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
            <path
                d="M5.629 1.613H3.041c-.985 0-1.783.798-1.783 1.782 0 8.37 6.784 15.153 15.153 15.153.984 0 1.782-.798 1.782-1.782v-2.589c0-.77-.468-1.461-1.183-1.747l-2.48-.992a1.882 1.882 0 00-1.903.302l-.64.533a1.882 1.882 0 01-2.536-.115l-1.803-1.803a1.882 1.882 0 01-.115-2.535l.533-.641a1.882 1.882 0 00.302-1.904l-.992-2.48A1.882 1.882 0 005.63 1.614z"
                stroke="#4E4E4E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SvgComponent
