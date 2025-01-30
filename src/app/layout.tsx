// // src\app\layout.tsx
// "use client"
// import localFont from "next/font/local";
// import "./globals.css";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { Toaster } from "sonner";
// import { usePathname } from "next/navigation";
// import { ClerkProvider } from "@clerk/nextjs";
// import Loading from "./loading"
// import { Suspense, useEffect, useState } from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
  
//   const pathname = usePathname()

//   const isStudio = pathname.startsWith("/studio")
//   const isHome = pathname.startsWith("/sign-in")
//   const isAdmin = pathname.startsWith("/admin")
  
//   const studioAndHome = !isStudio && !isHome && !isAdmin

//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(!isLoading)
//     }, 2000) // 2 seconds delay

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//          <Toaster richColors />
//         {studioAndHome && <Header/>}
//         {isLoading ? <Loading /> : <Suspense fallback={<Loading />}>{children}</Suspense>}
//         {studioAndHome && <Footer/>}
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }





// src\app\layout.tsx
"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import Loading from "./loading"
import { useEffect, useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change

  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Toaster richColors />
          {(studioAndHome && !isLoading) && <Header />}
          {isLoading ? <Loading /> : children}
          {(studioAndHome && !isLoading) && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}