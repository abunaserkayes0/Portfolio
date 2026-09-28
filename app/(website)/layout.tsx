import "../globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import SmoothScroll from "@/components/ui/smooth-scroll";

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
