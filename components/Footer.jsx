import { currentData } from "@/utils/getData";
import React from "react";
import Button from "./ui/Button";
import ScrollToTop from "./ui/ScrollToTop";

export default function Footer() {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <p className="text-base text-gray-600">Copyright © {currentData()} Abu Naser Kayes</p>
      <ScrollToTop />
    </div>
  );
}
