import { SVGProps } from 'react';

export function CiHeadingH5(props: SVGProps<SVGSVGElement>) {
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
        d="M21 9h-4l-1.25 5.016a2.998 2.998 0 0 1 3.555-.717a3 3 0 1 1-3.555 4.685M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"
      ></path>
    </svg>
  );
}
