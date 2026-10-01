import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Why Not? Cafe-bar | Boothstown, Manchester",
  description:
    "Quirky family-run cafe-bar in Boothstown. Food, drinks, beer garden, vinyl lounge and free live music. 29 Leigh Road, Manchester M28 1HP.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Why Not? Cafe-bar",
    description:
      "Quirky family-run cafe-bar in Boothstown — food, drinks, garden gigs.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-ink font-body text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
