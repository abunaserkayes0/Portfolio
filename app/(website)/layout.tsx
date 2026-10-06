import "../globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio description for portfolio page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-[#171718] dark:via-[#191a1e] dark:to-[#131415] text-[#0f172a] dark:text-[#e2e8f0] relative selection:bg-blue-500/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Lightweight ambient background gradient lights */}
          <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-indigo-500/10 blur-3xl" />
            <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-purple-500/10 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-sky-400/10 dark:bg-blue-500/10 blur-3xl" />
          </div>

          <SmoothScroll>
            <NavBar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
