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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.386 6.525A.967.967 0 000 7.296v9.772C0 18.688 1.343 20 3 20h14c.796 0 1.56-.309 2.121-.859.563-.55.879-1.295.879-2.073V7.296c0-.166-.109-.373-.21-.531-.091-.14-.357-.378-.669-.615L11.842.618a3.055 3.055 0 00-3.684 0L.386 6.525zM18 8.958l-6.543 3.552a3.064 3.064 0 01-2.914 0L2 8.958v8.11a.99.99 0 001 .978h14c.265 0 .52-.103.707-.287a.964.964 0 00.293-.69V8.957zM2.808 7.16l6.578-5a1.022 1.022 0 011.228 0l6.578 5-6.706 3.64a1.02 1.02 0 01-.972 0L2.808 7.16z"
                fill="#81D2D3"
            />
        </svg>
    )
}

export default SvgComponent
