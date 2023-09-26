import { Oi } from "next/font/google";
import ContactForm from "../components/contactForm/contactForm";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="h-screen bg-pink-100 p-8">
      <div className="border-black border-4 h-full p-8">
        <div className={oi.className}>
          <h1 className="text-black text-center text-4xl pb-8">
            DROP ME A LINE
          </h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
