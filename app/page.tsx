import Image from "next/image";
import head from "../public/head.png";
import cherry from "../public/cherry.png";
import daisies from "../public/daisies.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto h-screen px-4">
        <h1 className="text-black text-lg text-center">Alex Bunty</h1>
        <div className="flex flex-col">
          <Link href="/web-development">
            <p className="text-red text-2xl">WEB DEVELOPMENT</p>
          </Link>
          <Image
            src={daisies}
            alt="Picture of one large and one small cartoon daisy"
            className="w-32"
          />
        </div>
        <div className="flex flex-row">
          <Link href="/multi-media-illustration">
            <p className="rotate-90 text-green-900 text-lg">ILLUSTRATION</p>
          </Link>
          <Image
            src={cherry}
            alt="Picture of a fake yet realistic cherry"
            className="w-20"
          />
        </div>
        <Link href="/cakes">
          <p className="-rotate-90 text-pink-900 text-lg">CAKES</p>
        </Link>
        <Link href="/graphic-design">
          <p className="text-green-100 text-xl">GRAPHIC DESIGN</p>
        </Link>
        <Image
          src={head}
          alt="Picture of a ceramic cat head with bow around the neck"
          className="w-48"
        />
        <Link href="/about">
          <button className="bg-black text-white p-1">about</button>
        </Link>
        <Link href="/contact">
          <button className="bg-black text-white p-1">contact</button>
        </Link>
      </div>
    </>
  );
}
