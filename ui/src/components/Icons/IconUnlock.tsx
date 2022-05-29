import React, { memo } from "react";

const IconUnlock = (props: { color?: string; width?: string }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 490 490"
      enableBackground="new 0 0 490 490"
      xmlSpace="preserve"
      style={{
        fill: `var(${props.color})` || `inherit`,
        width: props.width || `100%`,
      }}
    >
      <path d="M437.15,432.8V258.3c0-31.5-25.7-57.2-57.2-57.2h-14.4v-80.5c0-66.5-54.1-120.6-120.6-120.6s-120.5,54.2-120.5,120.6 v13.9c0,9.5,7.7,17.1,17.1,17.1s17.2-7.7,17.2-17.1v-13.9c0-47.6,38.7-86.3,86.3-86.3s86.3,38.7,86.3,86.3v80.5h-221.3 c-31.5,0-57.2,25.6-57.2,57.2v174.5c0,31.5,25.7,57.2,57.2,57.2h270C411.55,489.9,437.15,464.3,437.15,432.8z M87.25,432.8V258.3 c0-12.6,10.3-22.9,22.9-22.9h269.9c12.6,0,22.9,10.3,22.9,22.9v174.5c0,12.6-10.3,22.9-22.9,22.9h-270 C97.45,455.6,87.25,445.4,87.25,432.8z" />
      <path d="M245.05,307.2c-9.5,0-17.2,7.7-17.2,17.1v44.3c0,9.5,7.7,17.1,17.2,17.1s17.1-7.7,17.1-17.1v-44.3 C262.15,314.9,254.55,307.2,245.05,307.2z" />
    </svg>
  );
};

export default memo(IconUnlock);
