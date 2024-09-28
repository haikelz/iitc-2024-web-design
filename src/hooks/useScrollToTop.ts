import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A custom hook to solve the problem of not auto scroll to top problem when navigate from one route to another route
 * @see https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
 * @export
 * @returns {*}
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
