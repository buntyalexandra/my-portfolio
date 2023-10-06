import cakeData from "../../../cakes/cakeData";
import Image from "next/image";
import Link from "next/link";

export default function Cakes() {
  return (
    <div className="flex flex-col items-center p-16">
      <h1>Cakes!</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {cakeData.map((cake) => {
          return (
            <Link href={`/cakes/${cake.id}`}>
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
