import { useEffect, useRef } from "react";
import type { ReactNode, HTMLAttributes } from "react";

// 🔹 Hook reutilizable para media queries
function useMediaQuery(query: string): boolean {
  if (typeof window === "undefined") return false;
  const media = window.matchMedia(query);
  return media.matches;
}

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  maxTiltDeg?: number;
  transitionMs?: number;
};

function TiltCard({
  children,
  className = "",
  maxTiltDeg = 10,
  transitionMs = 150,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isSmall = useMediaQuery("(max-width: 640px)");

  function handlePointerMove(e: React.PointerEvent) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds || prefersReduced || isSmall) return;

    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;

    const rotX = (1 - py) * (maxTiltDeg * 2) - maxTiltDeg;
    const rotY = px * (maxTiltDeg * 2) - maxTiltDeg;

    if (innerRef.current) {
      innerRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
  }

  function reset() {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  }

  useEffect(() => {
    if (prefersReduced || isSmall) {
      reset();
    }
  }, [prefersReduced, isSmall]);

  return (
    <div
      ref={ref}
      style={{ perspective: 1000 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={`will-change-transform [transform-style:preserve-3d] ${className}`}
      {...rest}
    >
      <div
        ref={innerRef}
        className="will-change-transform [backface-visibility:hidden]"
        style={{ transition: `transform ${transitionMs}ms ease-out` }}
      >
        {children}
      </div>
    </div>
  );
}

export default TiltCard;
