import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLP | Oakmount Legal Practitioners",
  description:
    "Oakmount Legal Practitioners is a Lagos-based law firm advising founders, companies, property clients and regulated businesses.",
  metadataBase: new URL("https://www.oakmountlp.com"),
  openGraph: {
    title: "OLP | Oakmount Legal Practitioners",
    description:
      "Legal clarity for founders, companies and businesses shaping Nigeria's economy.",
    url: "https://www.oakmountlp.com",
    siteName: "OLP",
    images: [{ url: "/oakmount-logo.png", width: 1200, height: 1200 }],
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
