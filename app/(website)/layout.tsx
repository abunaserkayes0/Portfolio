import "../globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio description for portfolio page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <NavBar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
