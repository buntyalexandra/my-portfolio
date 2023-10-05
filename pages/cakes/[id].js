import { getAllCakeIds, getCakeData } from "../../lib/cakes";
import Image from "next/image";

export default function SingleCake({ cakeInfo }) {
  return (
    <figure>
      <Image
        src={`/${cakeInfo.img}`}
        alt={cakeInfo.alt}
        key={cakeInfo.id}
        width={500}
        height={500}
        className="w-60 h-96"
      />
      <h1>{cakeInfo.name}</h1>
      <figcaption>{cakeInfo.caption}</figcaption>
    </figure>
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
