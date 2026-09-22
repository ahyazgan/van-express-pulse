import { useEffect, useState } from "react";

const QUERY = "(min-width: 768px)";

/**
 * True at Tailwind's `md` breakpoint and up, measured synchronously on the
 * first render. useIsMobile() answers "not mobile" until its effect runs,
 * which let the quote sheet open fully on phones for a frame and stay open;
 * anything that decides layout on the first paint must use this instead.
 */
export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
};
