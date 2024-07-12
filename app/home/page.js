"use client";

import DashBoard from "@/components/DashBoard";
import Card from "@/components/Card";
export default function () {
  return (
    <dev className="py-8 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashBoard />
      <Card />
    </dev>
  );
}
