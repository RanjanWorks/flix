// CustomSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

export default function CustomSkeleton() {
  return (
    <div className="p-2">
      <Skeleton
        height={250}
        borderRadius={10}
        baseColor="black"
        highlightColor="#0F172A" // Slightly lighter gray for shimmer effect
      />
    </div>
  );
}
