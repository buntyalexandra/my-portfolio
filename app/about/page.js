import Image from "next/image";
import alex from "../../public/alex.png";
import { Oi } from "next/font/google";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <div className="h-screen bg-green-200 p-8">
      <div className="border-black border-4 h-full p-8">
        <div className={oi.className}>
          <h1 className="text-black text-center text-4xl pb-8">THE SCOOP</h1>
        </div>
        {/* <Image
        src={alex}
        alt="Photo of Alex Bunty with sunglasses and out of focus green foliage background"
        className="w-48 float-left pr-6"
      /> */}
        <p>
          Hi, I'm Alex (she/her). I'm a full-stack web developer, graphic
          designer, illustrator, and funky custom cake slinger located in
          Baltimore, Maryland. As a perpetually curious person, I began
          exploring full-stack web development and quickly fell in love, finding
          that it satisfied the part of my brain that loves puzzling, strategy,
          and problem solving. When I'm not working on web dev projects, I lke
          to draw, collage, and pipe things that are cute, colorful, and weird.
        </p>
        <br></br>
        <p>
          Have something you'd like me to create? Drop me a line on my contact
          page.
        </p>
        <br></br>
        <p>
          If you're torn between me and the other guy, know that I can whip you
          up a mean dessert. And if sweets aren't your thing, I do savory
          goodness too.
        </p>
      </div>
    </div>
  );
}
