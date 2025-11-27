"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageView } from "@/lib/analytics";

/**
 * Component to automatically track page views
 */
export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    logPageView(pathname);
  }, [pathname]);

  return null;
}

