import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: `SaaS - Buzly \(Copy\)`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
