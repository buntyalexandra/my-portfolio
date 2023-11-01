import printIllustrationData from "../../../portfolioData/printIllustrationData";
import Image from "next/image";
import Link from "next/link";

export default function Illustration() {
  return (
    <div className="flex flex-col items-center p-16">
      <h1>Multi-Media Illustration!</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {printIllustrationData.map((printIllustration) => {
          return (
            <Link href={`/multi-media-illustration/${printIllustration.id}`}>
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
