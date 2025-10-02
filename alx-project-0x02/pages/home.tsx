import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | SoloForge</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page 🏡</h1>

        {/* Reusable Card Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <Card title="Getting Started" content="Learn how to set up your Next.js project with TypeScript and Tailwind CSS." />
          <Card title="Reusable Components" content="Build modular and reusable UI components with TypeScript interfaces." />
          <Card title="API Integration" content="Fetch and display data from external APIs using custom hooks." />
          <Card title="Project Structure" content="Organize your project following best practices for scalability." />
        </div>
      </main>
    </>
  );
}
