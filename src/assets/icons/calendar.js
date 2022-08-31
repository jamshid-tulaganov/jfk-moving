import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.208 3.792h-.959V1.875a.958.958 0 00-1.916 0v1.917H6.666V1.875a.958.958 0 10-1.917 0v1.917h-.958A2.875 2.875 0 00.916 6.667v10.541a2.875 2.875 0 002.875 2.875h13.417a2.875 2.875 0 002.875-2.875V6.667a2.875 2.875 0 00-2.875-2.875zM2.833 6.667c0-.53.429-.959.958-.959h13.417c.529 0 .958.43.958.958v.959H2.833v-.958zm14.375 11.5c.529 0 .958-.43.958-.959V9.542H2.833v7.666c0 .53.429.959.958.959h13.417z"
        fill="#4E4E4E"
      />
    </svg>
  );
}

export default SvgComponent;
