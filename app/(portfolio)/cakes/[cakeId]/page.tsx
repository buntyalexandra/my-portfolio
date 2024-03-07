import cakeData from "../../../../portfolioData/cakeData";
import { notFound } from "next/navigation";
import { getCakeData } from "../../../../lib/portfolioData";
import Image from "next/image";
import Link from "next/link";

export default async function Cake({ params }: { params: { cakeId: string } }) {
  const cakes = cakeData;
  const { cakeId } = params;

  if (!cakes.find((cake) => cake.id.toString() === cakeId)) {
    return notFound();
  }

  let fetchCakeInfo = await getCakeData(cakeId);
  // without this line of code, I recieve the TypeScript error that cakeInfo is possibly "undefined". While it is not the best solution to force the TS compilier to skip the stirct null checks for cakeInfo, I am ok with the solution becuase getCakeData only runs if passed a valid cakeId. I already check for and handle invalid ids in the if statement on line 11
  let cakeInfo = fetchCakeInfo!;

  console.log("params:", params);
  console.log("cake id:", cakeId);
  console.log("cake info:", cakeInfo);

  // if this is the first image, we want the back arrow to navigate to the last image in our series
  if (cakeInfo.id === 1) {
    return (
      <div className="h-screen bg-pink-100 flex flex-row flex-wrap gap-6 p-12 justify-start md:justify-center lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${cakeInfo.img}`}
              alt={cakeInfo.alt}
              key={cakeInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/cakes/${cakes.length}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/cakes/${cakeInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{cakeInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">{cakeInfo.caption}</p>
          <Link href="/cakes">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all cakes
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if this is the last image, we want the back arrow to navigate to the last image in our series
  if (cakeInfo.id === cakes.length) {
    return (
      <div className="h-screen bg-pink-100 flex flex-row flex-wrap gap-6 p-12 justify-start md:justify-center lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${cakeInfo.img}`}
              alt={cakeInfo.alt}
              key={cakeInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/cakes/${cakeInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href="/cakes/1">
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{cakeInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">{cakeInfo.caption}</p>
          <Link href="/cakes">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all cakes
            </button>
          </Link>
        </div>
      </div>
    );
  }
  // if this is not the first or last image, then we want our forward and back arrows to increment or decrement by one
  else {
    return (
      <div className="h-screen bg-pink-100 flex flex-row flex-wrap gap-6 p-12 justify-start md:justify-center lg:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-72 h-96 overflow-hidden group md:w-80 md:h-96 lg:w-96 lg:h-104">
            <Image
              src={`/${cakeInfo.img}`}
              alt={cakeInfo.alt}
              key={cakeInfo.id}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-row gap-2">
            <Link href={`/cakes/${cakeInfo.id - 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                ←
              </button>
            </Link>
            <Link href={`/cakes/${cakeInfo.id + 1}`}>
              <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
                →
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <h1 className="text-black">{cakeInfo.name}</h1>
          <hr className="border-1 border-black"></hr>
          <p className="text-pink-900 text-sm">{cakeInfo.caption}</p>
          <Link href="/cakes">
            <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
              all cakes
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
