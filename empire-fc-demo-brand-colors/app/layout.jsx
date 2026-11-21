import "./globals.css";

export const metadata = {
  title: "Empire FC | Built to Compete",
  description: "A demo football club website built with Next.js."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}