import React from "react";
import { useState, useEffect } from "react";

export default function loadingBar({ timer, progress, setProgress }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 130) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, timer); // Adjust the interval duration

    setTimeout(() => {
      clearInterval(interval);
    }, 5000); // Stop the interval duration

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div
      style={{
        backgroundSize: "100% 100%",
        animation: "fillText 2s linear forwards",
      }}
      className="mb-4  text-bold  "
    >
      {progress < 100 ? `${progress}%` : "100%"}
    </div>
  );
}
