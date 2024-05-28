import graphicDesignData from "@/portfolioData/graphicDesignData";
import { getGraphicDesignData } from "@/lib/portfolioData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function GraphicDesign({
  params,
}: {
  params: { id: string };
}) {
  const graphicDesignArtworks = graphicDesignData;
  const { id } = params;
  if (!graphicDesignArtworks.find((artwork) => artwork.id.toString() === id)) {
    return notFound();
  }

  let fetchGraphicDesignArtworkInfo = await getGraphicDesignData(id);
  // without this line of code, I recieve the TypeScript error that graphicDesignArtworkInfo is possibly "undefined". While it is not the best solution to force the TS compilier to skip the stirct null checks for graphicDesignArtworkInfo, I am ok with the solution becuase getGraphicDesignData only runs if passed a valid artworkId. I already check for and handle invalid ids in the if statement on line 14
  let graphicDesignArtworkInfo = fetchGraphicDesignArtworkInfo!;
  console.log("params:", params);
  console.log("id:", id);
  console.log("graphicDesignArtworkInfo:", graphicDesignArtworkInfo);

  // if this is the first image, we want the back arrow to navigate to the last image in our series. We also know this image has a portrait orientation, so we will use that styling. If the first image ever changes, we will have to update the styling accordingly
  if (graphicDesignArtworkInfo.id === 1) {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworks.length}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // if this is the last image, we want the back arrow to navigate to the last image in our series. We also know this image has an xtra-wide landscape orientation, so we will use that styling. If the last image ever changes, we will have to update the styling accordingly
  if (graphicDesignArtworkInfo.id === graphicDesignArtworks.length) {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-64 overflow-hidden group md:w-104 md:h-96 lg:w-116 lg:h-100">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href="/graphic-design/1">
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // if the image is landscape, return card with the styling for a landscape image
  if (graphicDesignArtworkInfo.orientation === "landscape") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-64 overflow-hidden group md:w-96 md:h-80 lg:w-104 lg:h-96">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if the image is portrait, return card with the styling for a portrait image
  if (graphicDesignArtworkInfo.orientation === "portrait") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if the image is square, return card with the styling for a square image
  if (graphicDesignArtworkInfo.orientation === "square") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-80 overflow-hidden group md:w-8=96 md:h-96 lg:w-100 lg:h-100">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if the image is xtra-wide landscape, return card with the styling for a x-w landscape image
  if (graphicDesignArtworkInfo.orientation === "x-w landscape") {
    return (
      <div className="h-screen bg-pink-100 flex flex-col lg:flex-row gap-6 p-12 justify-start items-center md:justify-center lg:items-start lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-80 h-32 overflow-hidden group md:w-104 md:h-96 lg:w-116 lg:h-100">
            <Image
              src={`/${graphicDesignArtworkInfo.img}`}
              alt={graphicDesignArtworkInfo.alt}
              key={graphicDesignArtworkInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/graphic-design/${graphicDesignArtworkInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{graphicDesignArtworkInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">
            {graphicDesignArtworkInfo.caption}
          </p>
          <Link href="/graphic-design">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all graphic design artwork
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
