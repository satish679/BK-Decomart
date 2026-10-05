import React, { useRef, useState, useEffect } from "react";

export default function TextReveal({ as: Component = "h2", children, className = "" }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderContent = () => {
    const items = Array.isArray(children) ? children : [children];
    let wordIndex = 0;

    return items.flatMap((item, itemIdx) => {
      if (typeof item === "string") {
        return item.split(/(\s+)/).map((part, partIdx) => {
          if (part.trim() === "") {
            return <span key={`${itemIdx}-s-${partIdx}`}>{part}</span>;
          }
          const index = wordIndex++;
          return (
            <span key={`${itemIdx}-w-${partIdx}`} className="inline-block overflow-hidden align-baseline">
              <span
                className={`inline-block transition-all duration-[900ms] ease-out ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[0.8em]"
                }`}
                style={{ transitionDelay: `${index * 65}ms` }}
              >
                {part}
              </span>
            </span>
          );
        });
      }

      const index = wordIndex++;
      return (
        <span key={`${itemIdx}-jsx`} className="inline-block overflow-hidden align-baseline">
          <span
            className={`inline-block transition-all duration-[900ms] ease-out ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[0.8em]"
            }`}
            style={{ transitionDelay: `${index * 65}ms` }}
          >
            {item}
          </span>
        </span>
      );
    });
  };

  return (
    <Component ref={ref} className={className}>
      {renderContent()}
    </Component>
  );
}
