// src/app/(admin)/admin/page.tsx
"use client";
import  ProductsGrid  from "@/components/productGrid";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded) {
      // Type assertion for publicMetadata
      const role = (user?.publicMetadata as { role?: string })?.role;
      
      if (!user || role !== 'admin') {
        router.push('/');
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Add loading state
  }

  return <ProductsGrid />;
}
