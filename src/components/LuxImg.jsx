import React, { useState, useEffect } from "react";
import { getImageSources } from "@/lib/site";

export default function LuxImg({
  name,
  alt = "",
  className = "",
  style,
  loading = "lazy",
  hideOnMissing = false,
  ...props
}) {
  const { candidates, fallback } = getImageSources(name);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [name]);

  const hasExhausted = index >= candidates.length;

  if (hasExhausted && hideOnMissing) {
    return null;
  }

  const src = hasExhausted ? fallback : candidates[index];

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      style={style}
      onError={() => setIndex((prev) => prev + 1)}
      {...props}
    />
  );
}
