"use client"

import * as React from "react"

// Returns true on small screens (Tailwind sm breakpoint: <640px)
export function useIsMobile(breakpointPx: number = 640): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`)
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [breakpointPx])

  return isMobile
}


