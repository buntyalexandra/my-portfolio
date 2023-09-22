import Image from "next/image";
import head from "../public/head.png";
import cherry from "../public/cherry.png";
import daisies from "../public/daisies.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-items-center gap-4 sm:gap-9">
        <h1 className="text-black text-lg text-center underline underline-offset-8 pt-4 sm:text-2xl sm:pt-8">
          Alex Bunty
        </h1>
        <div className="flex flex-col gap-3 sm:gap-8">
          <Link href="/web-development">
            <p className="text-red text-2xl text-center hover:text-black sm:text-4xl">
              WEB DEVELOPMENT
            </p>
          </Link>
          <div className="flex flex-row flex-nowrap items-start gap-3 justify-center sm:gap-7">
            <div className="flex flex-col justify-center gap-4 sm:gap-8">
              <div className="flex flex-row flex-nowrap items-center">
                <Image
                  src={daisies}
                  alt="Picture of one large and one small cartoon daisy"
                  className="w-32 sm:w-52"
                />
                <Link href="/cakes">
                  <p className="-rotate-90 text-pink-900 text-lg hover:text-black sm:text-2xl">
                    CAKES
                  </p>
                </Link>
              </div>
              <Link href="/graphic-design">
                <p className="text-green-400 text-xl hover:text-black sm:text-3xl">
                  GRAPHIC DESIGN
                </p>
              </Link>
            </div>
            <Image
              src={cherry}
              alt="Picture of a fake yet realistic cherry"
              className="w-20 sm:w-28"
            />
            <Link href="/multi-media-illustration">
              <div className="flex flex-col justify-center">
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  I
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  L
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  L
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  U
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  S
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  T
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  R
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  A
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  T
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  I
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  O
                </p>
                <p className="text-green-900 text-lg leading-none hover:text-black sm:text-2xl sm:leading-none">
                  N
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row items-start gap-3 justify-center">
            <Image
              src={head}
              alt="Picture of a ceramic cat head with bow around the neck"
              className="w-48 sm:w-64"
            />
            <div className="flex flex-col justify-start gap-2 sm:gap-4">
              <Link href="/about">
                <button className="bg-black text-white p-1 text-lg hover:text-pink-900 sm:text-2xl sm:p-2">
                  about
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-black text-white p-1 text-lg hover:text-pink-900 sm:text-2xl sm:p-2">
                  contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
