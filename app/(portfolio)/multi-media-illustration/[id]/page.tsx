import printIllustrationData from "@/portfolioData/printIllustrationData";
import { getPrintIllustrationData } from "../../../../lib/portfolioData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function PrintIllustration({
  params,
}: {
  params: { id: string };
}) {
  const printIllustrations = printIllustrationData;
  const { id } = params;
  if (
    !printIllustrations.find(
      (printIllustration) => printIllustration.id.toString() === id
    )
  ) {
    return notFound();
  }

  let fetchPrintIllustrationInfo = await getPrintIllustrationData(id);
  // without this line of code, I recieve the TypeScript error that printIllustrationInfo is possibly "undefined". While it is not the best solution to force the TS compilier to skip the stirct null checks for graphicDesignArtworkInfo, I am ok with the solution becuase getPrintIllustrationData only runs if passed a valid artworkId. I already check for and handle invalid ids in the if statement on line 14
  let printIllustrationInfo = fetchPrintIllustrationInfo!;
  console.log("params:", params);
  console.log("id:", id);
  console.log("printIllustrationInfo:", printIllustrationInfo);

  // if this is the first image, we want the back arrow to navigate to the last image in our series
  if (printIllustrationInfo.id === 1) {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-64 overflow-hidden group md:w-96 md:h-80 lg:w-104 lg:h-96">
            <Image
              src={`/${printIllustrationInfo.img}`}
              alt={printIllustrationInfo.alt}
              key={printIllustrationInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href={`/multi-media-illustration/${printIllustrations.length}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id + 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{printIllustrationInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {printIllustrationInfo.caption}
          </p>
          <Link href="/multi-media-illustration">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all multi-media illustrations
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // if this is the last image, we want the back arrow to navigate to the last image in our series
  if (printIllustrationInfo.id === printIllustrations.length) {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-64 overflow-hidden group md:w-96 md:h-80 lg:w-104 lg:h-96">
            <Image
              src={`/${printIllustrationInfo.img}`}
              alt={printIllustrationInfo.alt}
              key={printIllustrationInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id - 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href="/multi-media-illustration/1">
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{printIllustrationInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {printIllustrationInfo.caption}
          </p>
          <Link href="/multi-media-illustration">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all multi-media illustrations
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // if the image is landscape, return card with the styling for a landscape image
  if (printIllustrationInfo.orientation === "landscape") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-64 overflow-hidden group md:w-96 md:h-80 lg:w-104 lg:h-96">
            <Image
              src={`/${printIllustrationInfo.img}`}
              alt={printIllustrationInfo.alt}
              key={printIllustrationInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id - 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id + 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{printIllustrationInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {printIllustrationInfo.caption}
          </p>
          <Link href="/multi-media-illustration">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all multi-media illustrations
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if the image is portrait, return card with the styling for a portrait image
  if (printIllustrationInfo.orientation !== "landscape") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${printIllustrationInfo.img}`}
              alt={printIllustrationInfo.alt}
              key={printIllustrationInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id - 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link
              href={`/multi-media-illustration/${printIllustrationInfo.id + 1}`}
            >
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{printIllustrationInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {printIllustrationInfo.caption}
          </p>
          <Link href="/multi-media-illustration">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all multi-media illustrations
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
