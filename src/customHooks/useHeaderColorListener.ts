import { useEffect } from "react";

export function useHeaderColorListener() {
  useEffect(() => {
    const th = document.querySelectorAll("thead tr th");
    const tablehead = document.querySelector("thead");

    const observer = new IntersectionObserver(
      ([entry]) => {
        tablehead?.classList.toggle("stuck", entry.intersectionRatio < 1);
      },
      {
        rootMargin: "-1px 0px 0px 0px",
        threshold: [1],
      }
    );

    observer.observe(th[0]);
  }, []);
}
