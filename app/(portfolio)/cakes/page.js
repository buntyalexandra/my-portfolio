import cakeData from "../../../cakes/cakeData";
import Image from "next/image";

// export async function getStaticProps() {
//   return {
//     props: {
//       cakeData,
//     },
//   };
// }

// export default function Cakes({ cakeData }) {
//   return (
//     <div className="flex flex-col items-center p-16">
//       <h1>Cakes!</h1>
//       <div className="flex flex-row flex-wrap justify-start gap-8">
//         {cakeData.map(({ img, alt, id }) => {
//           return (
//             <div
//               className="w-60 h-96 bg-pink-900 relative overflow-hidden group"
//               key={id}
//             >
//               <Image
//                 src={`/${img}`}
//                 alt={alt}
//                 key={id}
//                 fill={true}
//                 className="object-cover group-hover:opacity-75"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function Cakes() {
  return (
    <div className="flex flex-col items-center p-16">
      <h1>Cakes!</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8">
        {cakeData.map((cake) => {
          return (
            <div
              className="w-60 h-96 bg-pink-900 relative overflow-hidden group"
              key={cake.id}
            >
              <Image
                src={`/${cake.img}`}
                alt={cake.alt}
                key={cake.id}
                fill={true}
                className="object-cover group-hover:opacity-75"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
