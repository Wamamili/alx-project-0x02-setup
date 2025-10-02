"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="p-6">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <p className="mt-2 text-gray-700">This is the about section of the project.</p>
        <div className="flex gap-4 mt-6">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;