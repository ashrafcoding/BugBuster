import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="mx-auto w-11/12 flex p-5 rounded-b-3xl border-purple-900 border-b border-x relative min-h-[60vh]">
      <div>
        <div className="border-2 p-2 rounded-lg w-fit">Welcome to Bug Buster</div>
        <h1 className="text-4xl py-7">The Ultimate AI-Powered Bug Tracker</h1>
        <h2 className="text-2xl py-2">that leaves no bugs behind</h2>
        <p className="text-l">
          Report, track, and close bugs 3X faster with Bug Buster
        </p>
        <p className="text-l">deep visual reports in single dashboard</p>
      </div>

      <Image
        src="/bugs.svg"
        width={500}
        height={500}
        alt="cube"
        className="hidden lg:block absolute right-[-50px] bottom-[-5px]"
      />
    </main>
  );
}
