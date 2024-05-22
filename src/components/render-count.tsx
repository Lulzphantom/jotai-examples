"use client";

import useRenderCounts from "@/hooks/use-render-counts";

const RenderCount = () => {
  const renderCount = useRenderCounts();
  return (
    <div className="absolute right-4">
      Renders: <strong>{renderCount}</strong>{" "}
    </div>
  );
};

export default RenderCount;
