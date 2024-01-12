import Image from "next/image";
import alex from "../../public/alex.png";
import Link from "next/link";
import { Oi } from "next/font/google";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <div className="h-full bg-green-200 p-6 lg:h-screen lg:p-10">
      <div className="border-black border-4 p-6 w-full lg:p-10">
        <div className={oi.className}>
          <h1 className="text-black text-center text-5xl pb-8 tracking-widest">
            THE SCOOP
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-5 items-center justify-center lg:flex-nowrap">
          <Image
            src={alex}
            alt="Photo of Alex Bunty with sunglasses and out of focus green foliage background"
            className="w-48"
          />
          <div>
            <p>
              Hi, I'm Alex (she/her). I'm a full-stack web developer, graphic
              designer, illustrator, and funky custom cake slinger located in
              Baltimore, Maryland. As a perpetually curious person, I began
              exploring full-stack web development and quickly fell in love,
              finding that it satisfied the part of my brain that loves
              puzzling, strategy, and problem solving. When I'm not working on
              web dev projects, I like to draw, collage, and pipe things that
              are cute, colorful, and weird.
            </p>
            <br></br>
            <p>
              Have something you'd like me to create? Drop me a line on my&nbsp;
              <Link
                href="/contact"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                contact page
              </Link>
              .
            </p>
            <br></br>
            <p>
              If you're torn between me and the other guy, know that I can whip
              you up a mean dessert. And if sweets aren't your thing, I do
              savory goodness too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
