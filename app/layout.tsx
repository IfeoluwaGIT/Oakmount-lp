import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBALP | Duro-Bello & Aina Legal Practitioners",
  description:
    "Duro-Bello & Aina Legal Practitioners is a Lagos-based law firm advising founders, companies, property clients and regulated businesses.",
  metadataBase: new URL("https://www.dba-lp.com"),
  openGraph: {
    title: "DBALP | Duro-Bello & Aina Legal Practitioners",
    description:
      "Legal clarity for founders, companies and businesses shaping Nigeria's economy.",
    url: "https://www.dba-lp.com",
    siteName: "DBALP",
    images: [{ url: "/dba-logo.png", width: 1200, height: 1200 }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
