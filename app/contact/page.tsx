import { Oi } from "next/font/google";
import ContactForm from "../components/contactForm/contactForm";
import Image from "next/image";
import phone from "../../public/phone_outline.png";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="h-screen bg-pink-100 p-8">
      <div className="border-black border-4 h-fit p-8 flex flex-col items-center md:h-fit">
        <div className={oi.className}>
          <h1 className="text-black text-center text-5xl pb-8 tracking-widest">
            DROP A LINE.
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-12">
          <Image
            src={phone}
            alt="photo of an illustrated vintage red circular corded telephone"
            className="w-52 h-36 md:w-64 md:h-48"
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
