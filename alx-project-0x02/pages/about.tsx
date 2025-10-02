import Head from "next/head";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | SoloForge</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold">About This Project 📖</h1>
        <p className="mt-4 text-gray-600">
          SoloForge is a learning project built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
