import printIllustrationData from "../../../portfolioData/printIllustrationData";
import Image from "next/image";
import Link from "next/link";
import { Oi } from "next/font/google";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function Illustration() {
  return (
    <div className="flex flex-col items-center p-16">
      <div className={oi.className}>
        <h1 className="text-black text-center text-4xl pb-8 tracking-widest">
          MULTI-MEDIA <br></br>ILLUSTRATION
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {printIllustrationData.map((printIllustration) => {
          return (
            <Link
              href={`/multi-media-illustration/${printIllustration.id}`}
              key={printIllustration.id}
            >
              <div
                className="w-60 h-80 bg-pink-900 relative overflow-hidden group"
                key={printIllustration.id}
              >
                <Image
                  src={`/${printIllustration.img}`}
                  alt={printIllustration.alt}
                  key={printIllustration.id}
                  fill={true}
                  className="object-cover group-hover:opacity-75"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
