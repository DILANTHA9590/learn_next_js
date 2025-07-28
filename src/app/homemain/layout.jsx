import Link from "next/link";

export default function HomeLayout({ children }) {
  return (
    <div className="h-screen">
      <nav className="flex items-center px-6 space-x-6 text-white bg-black/70 h-[15%] backdrop-blur-xl">
        <Link href="/homemain">homes</Link>
        <Link href="/homemain/about">About</Link>
        <Link href="/homemain/contact">Contact</Link>
      </nav>

      {/* Content - 80% height */}
      <main className=" overflow-auto bg-gray-100 h-[85%]">{children}</main>
    </div>
  );
}
