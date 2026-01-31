import { useEffect, useRef, useState } from "react";

interface ScrollSpyOptions {
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export const useScrollSpy = (
  ids: string[],
  {
    enabled = true,
    rootMargin = "-5% 0px -75% 0px",
    threshold = 0.5,
  }: ScrollSpyOptions = {},
) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isManualScrolling = useRef(false);
  // En useScrollSpy.ts cambia la referencia del Ref:
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setAndLockActiveId = (id: string) => {
    // 1. Bloqueamos el observer y marcamos el activo inmediatamente
    isManualScrolling.current = true;
    setActiveId(`${id}-spy`);

    // 2. Definimos la función para desbloquear
    const unlock = () => {
      isManualScrolling.current = false;
      window.removeEventListener("scroll", onScroll);
    };

    // 3. Función debounce: mientras haya scroll, reiniciamos el timer
    const onScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(unlock, 100); // 100ms tras el último movimiento
    };

    window.addEventListener("scroll", onScroll);
  };

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Si el usuario clickeó un link, ignoramos lo que diga el observer
        if (isManualScrolling.current) return;

        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const active = visibleEntries.reduce((prev, curr) => {
            return Math.abs(curr.boundingClientRect.top) <
              Math.abs(prev.boundingClientRect.top)
              ? curr
              : prev;
          });
          setActiveId(active.target.id);
        }
      },
      { rootMargin, threshold },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [ids, enabled, rootMargin, threshold]);

  return { activeId, setAndLockActiveId };
};
