import { SVGProps } from 'react';

export function CiHeadingH2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12.5V12a3 3 0 0 1 3-3h.172a2.828 2.828 0 0 1 2 4.829L15 19h6M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"
      ></path>
    </svg>
  );
}
