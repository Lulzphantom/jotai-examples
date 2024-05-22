"use client";

import { useEffect, useRef } from "react";

const useRenderCounts = () => {
  const rerenderCountRef = useRef(0);
  useEffect(() => {
    rerenderCountRef.current += 1;
  })

  return rerenderCountRef.current;
}

export default useRenderCounts