import { useEffect, useState } from "react";

interface ScrollSpyOptions {
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export const useScrollSpy = (
  ids: string[],
  {
    enabled = true,
    rootMargin = "-20% 0px -60% 0px",
    threshold = 0.1,
  }: ScrollSpyOptions = {}
) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setTimeout(() => setActiveId(null), 0); // Reset diferido para evitar estado persistente al cambiar de ruta
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );

        setActiveId(topMost.target.id);
      },
      { rootMargin, threshold }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, enabled, rootMargin, threshold]);

  return enabled ? activeId : null;
};
