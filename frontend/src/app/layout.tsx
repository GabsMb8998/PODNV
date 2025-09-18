import Sidebar from "@/components/SideBar/Index";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex relative">
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
