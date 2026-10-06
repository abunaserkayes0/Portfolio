import { getCurrentYear } from "@/utils/getData";
import Button from "./ui/button";
import ScrollToTop from "./ui/scroll-to-top";

export default function Footer() {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <p className="text-base text-gray-600 dark:text-gray-400">Copyright © {getCurrentYear()} Abu Naser Kayes</p>
      <ScrollToTop />
    </div>
  );
}
