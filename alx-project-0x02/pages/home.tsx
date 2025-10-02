import Head from "next/head";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | SoloForge</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page 🏡</h1>
        <p className="mt-4 text-gray-600">This is the home section of our Next.js project.</p>
      </main>
    </>
  );
}
