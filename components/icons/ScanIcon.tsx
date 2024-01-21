import * as React from "react"
import { SVGProps } from "react"
export const ScanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#979797"
      d="M21.75 4.5V8a.75.75 0 0 1-1.5 0V4.5c0-.589-.161-.75-.75-.75H16a.75.75 0 0 1 0-1.5h3.5c1.409 0 2.25.841 2.25 2.25ZM3 8.75A.75.75 0 0 0 3.75 8V4.5c0-.589.161-.75.75-.75H8a.75.75 0 0 0 0-1.5H4.5c-1.409 0-2.25.841-2.25 2.25V8c0 .414.336.75.75.75Zm5 11.5H4.5c-.589 0-.75-.161-.75-.75V16a.75.75 0 0 0-1.5 0v3.5c0 1.409.841 2.25 2.25 2.25H8a.75.75 0 0 0 0-1.5Zm13-5a.75.75 0 0 0-.75.75v3.5c0 .589-.161.75-.75.75H16a.75.75 0 0 0 0 1.5h3.5c1.409 0 2.25-.841 2.25-2.25V16a.75.75 0 0 0-.75-.75ZM6.25 8.88V9a.75.75 0 0 0 1.5 0v-.12c0-.845.285-1.13 1.13-1.13h6.24c.845 0 1.13.285 1.13 1.13V9a.75.75 0 0 0 1.5 0v-.12c0-1.671-.959-2.63-2.63-2.63H8.88c-1.671 0-2.63.958-2.63 2.63Zm8.87 8.87H8.88c-1.671 0-2.63-.959-2.63-2.63v-2.37H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5h-1.25v2.37c0 1.671-.959 2.63-2.63 2.63Zm1.13-2.63v-2.37h-8.5v2.37c0 .845.285 1.13 1.13 1.13h6.24c.845 0 1.13-.285 1.13-1.13Z"
    />
  </svg>
)
