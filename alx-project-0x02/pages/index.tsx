import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Project Setup</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-3xl font-semibold">Welcome to SoloForge 🚀</h2>
        <p className="mt-4 text-lg text-gray-600">
          Your journey to mastering Next.js, TypeScript, and Tailwind CSS starts here!
        </p>
      </main>
    </>
  );
}
