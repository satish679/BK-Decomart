import React from "react";

export default function PieChart({ data = [], className = "" }) {
  if (!data || data.length === 0) return null;
  const total = data.reduce((acc, curr) => acc + (curr.value || 0), 0) || 1;
  let accumulated = 0;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {data.map((slice, i) => {
          const startAngle = (accumulated / total) * 360;
          accumulated += slice.value;
          const endAngle = (accumulated / total) * 360;
          const largeArc = endAngle - startAngle > 180 ? 1 : 0;
          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;
          const x1 = 50 + 40 * Math.cos(startRad);
          const y1 = 50 + 40 * Math.sin(startRad);
          const x2 = 50 + 40 * Math.cos(endRad);
          const y2 = 50 + 40 * Math.sin(endRad);

          return (
            <path
              key={i}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={slice.color || "#9b7126"}
              className="transition-opacity hover:opacity-85"
            />
          );
        })}
      </svg>
    </div>
  );
}
