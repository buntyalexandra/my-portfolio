import cakeData from "@/cakes/cakeData";
import { notFound } from "next/navigation";
import { getCakeData } from "../../../lib/cakes";
import Image from "next/image";
import Link from "next/link";

export default async function Cake({ params }: { params: { cakeId: string } }) {
  const cakes = cakeData;
  const { cakeId } = params;

  if (!cakes.find((cake) => cake.id.toString() === cakeId)) {
    return notFound();
  }

  const cakeInfo = await getCakeData(cakeId);

  return (
    <div className="h-screen bg-pink-100 flex flex-row flex-wrap gap-6 p-12 justify-start md:justify-center lg:justify-center">
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
