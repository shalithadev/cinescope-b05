import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";

// RSC - React Server Component
// SSR - Enabled by default
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <MainNav />
      <main className="flex flex-col justify-center items-center gap-4 flex-12 text-4xl py-16 min-h-screen bg-purple-300">
        This is Home Page
        <Link
          href="/movies"
          className="text-white text-sm bg-black p-4 rounded-full"
        >
          Go to Movies Page
        </Link>
        <div>
          <Image
            src="/assets/naming-conventions.png"
            alt="Naming Conventions"
            width={800}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
