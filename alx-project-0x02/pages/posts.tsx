"use client";
import React from "react";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-2 text-gray-700">Here you will see a list of posts soon.</p>
      </main>
    </div>
  );
};

export default PostsPage;
