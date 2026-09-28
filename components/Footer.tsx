import { getCurrentYear } from "@/utils/getData";
import Button from "./ui/Button";
import ScrollToTop from "./ui/ScrollToTop";

export default function Footer() {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <p className="text-base text-gray-600">Copyright © {getCurrentYear()} Abu Naser Kayes</p>
      <ScrollToTop />
    </div>
  );
}
