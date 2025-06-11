import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FlowRobotics - Accelerate Your Autonomous Systems Research",
  description: "Complete research packages for autonomous systems development. Advanced robotics equipment, sensors, and AI platforms designed for researchers and institutions.",
  keywords: "robotics research, autonomous systems, research equipment, robotics packages, AI development, laboratory robotics",
  openGraph: {
    title: "FlowRobotics - Accelerate Your Autonomous Systems Research",
    description: "Complete research packages for autonomous systems development. Advanced equipment for researchers and institutions.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          as="image" 
          href="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
