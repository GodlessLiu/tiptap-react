import { SVGProps } from 'react';

export function MaterialSymbolsAlignHorizontalLeft(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 22V2h2v20H2Zm4-5v-3h10v3H6Zm0-7V7h16v3H6Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsAlignHorizontalRight(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 22V2h2v20h-2ZM8 17v-3h10v3H8Zm-6-7V7h16v3H2Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsAlignCenter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 13v-2h20v2H2Zm5-3V7h10v3H7Zm0 7v-3h10v3H7Z"
      ></path>
    </svg>
  );
}
