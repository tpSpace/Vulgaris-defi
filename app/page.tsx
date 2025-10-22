import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh bg-[#CAEAE5]">
      <nav className="w-full flex justify-center items-center">
        <NavBar />
      </nav>
      <section className="flex flex-col items-center justify-center h-1/2 text-center">
        <h1 className="text-5xl font-bold mb-4">
          All in one defi platform right in your palm
        </h1>
        {/*<p className="text-lg text-center">
          Your decentralized finance platform
        </p>*/}
        <Link href="/dashboard">
          <button className="bg-[#000000] hover:bg-[#CAEAE5] text-white hover:text-[#000000] border border-black font-bold py-3 px-10 rounded-full cursor-pointer">
            Start earning
          </button>
        </Link>
      </section>

      <section className="flex flex-col items-center justify-center h-1/2 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Manage asset all in one place
        </h2>
        <ul className="list-disc list-inside">
          <li>Decentralized finance</li>
          <li>Secure transactions</li>
          <li>User-friendly interface</li>
        </ul>
      </section>
    </div>
  );
}
