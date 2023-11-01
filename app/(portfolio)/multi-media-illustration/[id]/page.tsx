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
  const printIllustrationInfo = await getPrintIllustrationData(id);
  console.log("params:", params);
  console.log("id:", id);
  console.log("printIllustrationInfo:", printIllustrationInfo);

  return (
    <div className="h-screen bg-pink-100 flex flex-row flex-wrap gap-6 p-12 justify-start md:justify-center lg:justify-center">
      <div className="relative w-96 h-72 overflow-hidden group md:w-96 md:h-80 lg:w-104 lg:h-96">
        <Image
          src={`/${printIllustrationInfo.img}`}
          alt={printIllustrationInfo.alt}
          key={printIllustrationInfo.id}
          fill={true}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col w-48 gap-2">
        <h1 className="text-black">{printIllustrationInfo.name}</h1>
        <hr className="border-1 border-black"></hr>
        <p className="text-pink-900 text-sm">{printIllustrationInfo.caption}</p>
        <Link href="/multi-media-illustration">
          <button className="bg-black text-white p-1 text-xs hover:text-pink-900">
            all multi-media illustrations
          </button>
        </Link>
      </div>
    </div>
  );
}
