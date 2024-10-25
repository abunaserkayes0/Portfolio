import "../globals.css";
import NavBar from '@/components/NavBar';
export const metadata = {
  title: "Portfolio",
  description: "Portfolio description for portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
