// app/cart/layout.tsx
import { Suspense } from "react";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      {children}
    </Suspense>
  );
}
