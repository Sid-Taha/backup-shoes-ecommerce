// src/app/(admin)/statistics/page.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatisticsCharts from "@/components/statistics-charts";


export default function StatisticsPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded) {
      const role = (user?.publicMetadata as { role?: string })?.role;
      if (!user || role !== 'admin') {
        router.push('/');
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <StatisticsCharts />;
}