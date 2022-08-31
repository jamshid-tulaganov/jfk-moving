import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={22}
            height={15}
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3.378 11.55h15.065a.64.64 0 00.64-.64V6.118a.64.64 0 00-.64-.639H3.378a.64.64 0 00-.639.64v4.793c0 .353.286.639.64.639zM16.07 6.757h1.735v3.514h-1.735V6.757zm-3.012 0h1.734v3.514h-1.735V6.757zm-3.014 0h1.735v3.514h-1.735V6.757zm-3.012 0h1.734v3.514H7.03V6.757zm-3.013 0h1.734v3.514H4.018V6.757z"
                fill="#81D2D3"
            />
            <path
                d="M21.182 0H.64A.64.64 0 000 .64v13.01c0 .353.286.64.64.64h20.542a.64.64 0 00.64-.64V.64a.64.64 0 00-.64-.64zm-.64 13.01H1.28V1.28h19.264V13.01z"
                fill="#81D2D3"
            />
            <path
                d="M3.378 4.017h15.065c.848-.031.847-1.247 0-1.278H3.378c-.847.031-.846 1.247 0 1.278z"
                fill="#81D2D3"
            />
        </svg>
    )
}

export default SvgComponent
