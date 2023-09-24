import type { Photo } from "../../../models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div key={photo.id} className="h-64 bg-pink-900 relative overflow-hidden">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        className="object-cover"
      />
    </div>
  );
}
