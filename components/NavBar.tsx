import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center w-5xl p-3 rounded-4xl bg-[#071311] text-[#CAEAE5] m-10">
      <div className="font-bold text-xl cursor-pointers px-3">
        Vulgaris Finance
      </div>
      <div className="flex space-x-5">
        <Link href="#features">Features</Link>
        <Link href="#docs">Docs</Link>
        <Link href="#faq">FAQ</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className="px-3">
        <Link
          href="/dashboard"
          className="bg-[#CAEAE5] text-[#071311] py-2 px-4 rounded-full hover:bg-gray-700 hover:text-[#CAEAE5]"
        >
          Launch App
        </Link>
      </div>
    </div>
  );
}
