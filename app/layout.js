import { Lora, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "The Natural Health Guide — Real Remedies for Everyday Life",
  description:
    "A 55-page, no-fluff guide to real food, herbal remedies, and everyday rituals that actually fit your life. Instant PDF download.",
  openGraph: {
    title: "The Natural Health Guide",
    description:
      "A no-fluff guide to real food, herbal remedies, and everyday rituals that actually fit your life.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
