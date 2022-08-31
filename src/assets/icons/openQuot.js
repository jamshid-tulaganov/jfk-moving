import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.626 14.875c0-2.25.125-4.25.375-6 .333-1.75.917-3.208 1.75-4.375.833-1.25 2.042-2.167 3.625-2.75 1.583-.583 3.708-.875 6.375-.875h1V6.75h-1.625c-1.417 0-2.458.417-3.125 1.25-.583.833-.875 2.375-.875 4.625v1.5h5.625V30.5H.626V14.875zm17.875 0c0-2.25.125-4.25.375-6 .333-1.75.917-3.208 1.75-4.375.833-1.25 2.042-2.167 3.625-2.75 1.583-.583 3.708-.875 6.375-.875h1V6.75h-1.625c-1.417 0-2.458.417-3.125 1.25-.583.833-.875 2.375-.875 4.625v1.5h5.625V30.5H18.501V14.875z"
        fill="#DDD"
      />
    </svg>
  );
}
SvgComponent.defaultProps = {
  width: 32,
  height: 31
}
export default SvgComponent;
