import React from "react";

const IconAdmin = (props: { color?: string; width?: string }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      style={{
        fill: `var(${props.color})` || `inherit`,
        width: props.width || `100%`,
      }}
    >
      <g>
        <path
          d="M363.4,384.5c33,0,59.9-26.9,59.9-59.9c0-33-26.9-59.9-59.9-59.9c-33,0-59.9,26.9-59.9,59.9
		C303.5,357.6,330.4,384.5,363.4,384.5z M363.4,289.1c19.5,0,35.4,15.9,35.4,35.4c0,19.5-15.9,35.4-35.4,35.4S328,344.1,328,324.5
		C328,305,343.9,289.1,363.4,289.1z"
        />
        <path
          d="M247.2,292.9c-11.3,0-20.5,9.2-20.5,20.5v22.4c0,11.3,9.2,20.5,20.5,20.5h9c2.2,7.6,5.2,14.9,9,21.8l-6.4,6.4
		c-3.9,3.9-6,9-6,14.5c0,5.5,2.1,10.6,6,14.5l15.8,15.8c3.9,3.9,9,6,14.5,6c5.5,0,10.6-2.1,14.5-6l6.4-6.4c6.9,3.8,14.2,6.8,21.8,9
		v9c0,11.3,9.2,20.5,20.5,20.5h22.4c11.3,0,20.5-9.2,20.5-20.5v-9c7.6-2.2,14.9-5.2,21.8-9l6.4,6.4c3.9,3.9,9,6,14.5,6
		c5.5,0,10.6-2.1,14.5-6l15.8-15.8c8-8,8-21,0-28.9l-6.4-6.4c3.8-6.9,6.8-14.2,9-21.8h9c11.3,0,20.5-9.2,20.5-20.5v-22.4
		c0-11.3-9.2-20.5-20.5-20.5h-9c-2.2-7.6-5.2-14.9-9-21.8l6.4-6.4c3.9-3.9,6-9,6-14.5s-2.1-10.6-6-14.5L452.2,220
		c-3.9-3.9-9-6-14.5-6c-5.5,0-10.6,2.1-14.5,6l-6.4,6.4c-6.9-3.8-14.2-6.8-21.8-9v-9c0-11.3-9.2-20.5-20.5-20.5h-22.4
		c-11.3,0-20.5,9.2-20.5,20.5v9c-7.6,2.2-14.9,5.2-21.8,9l-6.4-6.4c-3.9-3.9-9-6-14.5-6c-5.5,0-10.6,2.1-14.5,6l-15.8,15.8
		c-3.9,3.9-6,9-6,14.5s2.1,10.6,6,14.5l6.4,6.4c-3.8,6.9-6.8,14.2-9,21.8H247.2z M265.8,317.4c5.8,0,10.9-4.1,12-9.9
		c2.2-11.3,6.6-21.9,13-31.5c3.3-4.9,2.6-11.3-1.5-15.5l-10.3-10.3l10.1-10.1l10.3,10.3c4.1,4.1,10.6,4.8,15.5,1.5
		c9.6-6.4,20.2-10.8,31.5-13c5.7-1.1,9.9-6.2,9.9-12v-14.6h14.3v14.6c0,5.9,4.1,10.9,9.9,12c11.3,2.2,21.9,6.6,31.5,13
		c4.9,3.3,11.3,2.6,15.5-1.5l10.3-10.3l10.1,10.1l-10.3,10.3c-4.1,4.1-4.8,10.6-1.5,15.5c6.4,9.6,10.8,20.2,13,31.5
		c1.1,5.7,6.2,9.9,12,9.9h14.6v14.3h-14.6c-5.8,0-10.9,4.1-12,9.9c-2.2,11.3-6.6,21.9-13,31.5c-3.3,4.9-2.6,11.3,1.5,15.5l10.3,10.3
		l-10.1,10.1l-10.3-10.3c-4.1-4.1-10.6-4.8-15.5-1.5c-9.6,6.4-20.2,10.8-31.5,13.1c-5.7,1.1-9.9,6.2-9.9,12v14.6h-14.3v-14.6
		c0-5.9-4.1-10.9-9.9-12c-11.3-2.2-21.9-6.6-31.5-13.1c-4.9-3.2-11.3-2.6-15.5,1.5l-10.3,10.3l-10.1-10.1l10.3-10.3
		c4.1-4.1,4.8-10.6,1.5-15.5c-6.4-9.6-10.8-20.2-13-31.5c-1.1-5.7-6.2-9.9-12-9.9h-14.6v-14.3H265.8z"
        />
        <path
          d="M11.9,83.7v269.8c0,18.2,14.8,32.9,32.9,32.9h173.8c6.8,0,12.3-5.5,12.3-12.3c0-6.8-5.5-12.3-12.3-12.3H44.8
		c-4.6,0-8.4-3.8-8.4-8.4V153.1h364.5v24c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3V83.7c0-18.2-14.8-32.9-32.9-32.9H44.8
		C26.6,50.8,11.9,65.5,11.9,83.7z M400.9,83.7v44.9H36.4V83.7c0-4.6,3.8-8.4,8.4-8.4h347.6C397.1,75.3,400.9,79,400.9,83.7z"
        />
        <path
          d="M63,114.1c3.2,0,6.4-1.3,8.7-3.6c2.3-2.3,3.6-5.4,3.6-8.7c0-3.2-1.3-6.4-3.6-8.7c-4.6-4.5-12.8-4.5-17.3,0.1
		c-2.3,2.3-3.6,5.4-3.6,8.6c0,3.2,1.3,6.4,3.6,8.7C56.6,112.9,59.8,114.1,63,114.1z"
        />
        <path
          d="M101.9,114.1c3.2,0,6.4-1.3,8.6-3.6c2.3-2.3,3.6-5.4,3.6-8.7c0-3.2-1.3-6.4-3.6-8.7c-4.6-4.5-12.8-4.5-17.3,0.1
		c-2.3,2.3-3.6,5.4-3.6,8.6c0,3.2,1.3,6.4,3.6,8.7C95.5,112.9,98.7,114.1,101.9,114.1z"
        />
        <path
          d="M140.8,114.1c3.2,0,6.4-1.3,8.7-3.6c2.3-2.3,3.6-5.4,3.6-8.7c0-3.2-1.3-6.4-3.6-8.6c-4.6-4.6-12.8-4.6-17.3,0
		c-2.3,2.3-3.6,5.4-3.6,8.6c0,3.2,1.3,6.4,3.6,8.7C134.4,112.9,137.6,114.1,140.8,114.1z"
        />
      </g>
    </svg>
  );
};

export default IconAdmin;
