import * as React from "react"

function SvgComponent(props) {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="20" height="2" rx="1" fill="#A8324A"/>
            <rect y="8" width="20" height="2" rx="1" fill="#A8324A"/>
            <rect y="16" width="20" height="2" rx="1" fill="#A8324A"/>
        </svg>
    )
}

export default SvgComponent;