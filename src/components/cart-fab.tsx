"use client";

import { useRouter } from "next/navigation";
import FloatingActionMenu from "@/components/ui/floating-action-menu";

export function CartFAB() {
  const router = useRouter();

  return (
    <FloatingActionMenu
      options={[
        {
          label: "Сагс",
          onClick: () => router.push("/cart"),
        },
      ]}
    />
  );
}
