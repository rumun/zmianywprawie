import type { Metadata } from "next";
import { Roboto, Heebo } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "zmianywprawie — Zmiany w prawie dla Twojej branzy",
  description:
    "Monitorujemy zmiany w prawie i tlumaczymy je na prosty jezyk. Raporty dzienne, tygodniowe i miesieczne dla Twojej branzy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${roboto.variable} ${heebo.variable} font-[family-name:var(--font-roboto)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
