import { useEffect } from "react";

export function useHeaderColorListener() {
  useEffect(() => {
    const th = document.querySelectorAll("thead tr th");

    const observer = new IntersectionObserver(
      ([entry]) => {
        th.forEach((header) => {
          header.classList.toggle("stuck", entry.intersectionRatio < 1);
        });
      },
      {
        rootMargin: "-1px 0px 0px 0px",
        threshold: [1],
      }
    );

    observer.observe(th[0]);
  }, []);
}
