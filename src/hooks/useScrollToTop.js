import { useEffect } from 'react';

/**
 * Custom hook to scroll the window to top on route / page changes.
 * Supports smooth scrolling when requested.
 */
export function useScrollToTop(dependency, smooth = false) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [dependency, smooth]);
}

export default useScrollToTop;
