import cakeData from "../../../portfolioData/cakeData";
import Image from "next/image";
import Link from "next/link";
import { Oi } from "next/font/google";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function Cakes() {
  return (
    <div className="flex flex-col items-center p-6 lg:p-16">
      <div className={oi.className}>
        <h1 className="text-black text-center text-2xl lg:text-4xl pb-8 tracking-widest">
          CAKES
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {cakeData.map((cake) => {
          return (
            <Link href={`/cakes/${cake.id}`} key={cake.id}>
              <div
                className="w-60 h-80 bg-pink-900 relative overflow-hidden group"
                key={cake.id}
              >
                <Image
                  src={`/${cake.img}`}
                  alt={cake.alt}
                  key={cake.id}
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
