import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VSCode Portfolio",
  description: "A Portfolio Website for Visual Studio Code",
  keywords: "VSCode, Portfolio, Website, Developer",
  author: "Chiranjeeb Jena",
  ogImage: "https://utfs.io/f/z3Yl2icFpQGO7eEjp42Ss8nwPEhB3YHcaTp2J6GetRX4FVWb",
  twitter: {
    card: "summary_large_image",
    site: "@ichiranjeeb",
  },
  github: "https://github.com/chiranjeebhub",
  linkedin: "https://linkedin.com/in/ichiranjeeb",
  siteUrl: "https://vscode-portfolio-cj.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
