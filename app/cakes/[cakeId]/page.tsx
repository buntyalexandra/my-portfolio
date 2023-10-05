import cakeData from "@/cakes/cakeData";
import { notFound } from "next/navigation";
import { getCakeData } from "../../../lib/cakes";
import Image from "next/image";

export default async function Cake({ params }: { params: { cakeId: string } }) {
  const cakes = cakeData;
  const { cakeId } = params;

  if (!cakes.find((cake) => cake.id.toString() === cakeId)) {
    return notFound();
  }

  const cakeInfo = await getCakeData(cakeId);

  return (
    <div className="h-full bg-pink-100 flex flex-row gap-6 p-12">
      <Image
        src={`/${cakeInfo.img}`}
        alt={cakeInfo.alt}
        key={cakeInfo.id}
        width={cakeInfo.width}
        height={cakeInfo.height}
      />
      <div className="flex flex-col w-48 gap-2">
        <h1 className="text-black">{cakeInfo.name}</h1>
        <hr className="border-1 border-black"></hr>
        <p className="text-pink-900 text-sm">{cakeInfo.caption}</p>
      </div>
    </div>
  );
}
