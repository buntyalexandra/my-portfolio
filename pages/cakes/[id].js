import { getAllCakeIds, getCakeData } from "../../lib/cakes";
import Image from "next/image";

export default function SingleCake({ cakeInfo }) {
  return (
    <div>
      <figure className="flex flex-row flex-wrap">
        <Image
          src={`/${cakeInfo.img}`}
          alt={cakeInfo.alt}
          key={cakeInfo.id}
          width={cakeInfo.width}
          height={cakeInfo.height}
          className="shrink"
          sizes="(max-width:768px) 50vw, (max-width: 1200px) 25vw"
        />
        <h1 className="text-pink-900">{cakeInfo.name}</h1>
        <figcaption>{cakeInfo.caption}</figcaption>
      </figure>
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllCakeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the cake image using params.id
  const cakeInfo = getCakeData(params.id);
  return {
    props: {
      cakeInfo,
    },
  };
}
