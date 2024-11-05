"use client";
import React from "react";
import Button from "./Button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      className="w-16 h-16 flex items-center justify-center rounded-full"
      variant="tertiary"
      onClick={scrollTop}
    >
      <ArrowUp />
    </Button>
  );
}
