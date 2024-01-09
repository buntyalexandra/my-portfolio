import { Oi } from "next/font/google";
import Image from "next/image";
import galleryHouse from "../../../public/gallery-house.png";
import canICocktail from "../../../public/can-i-cocktail.png";
import hopMart from "../../../public/hop-mart.png";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function WebDevelopment() {
  return (
    <div className="flex flex-col items-center pt-16 pr-32 pl-32 pb-32">
      <div className={oi.className}>
        <h1 className="text-black text-center text-4xl pb-8 tracking-widest">
          WEB DEVELOPMENT
        </h1>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-row gap-5 items-center">
          <Image
            src={galleryHouse}
            alt="image of gallery house logo"
            className="w-10"
          />
          <div>
            <h2 className="underline underline-offset-8 text-pink-900">
              Gallery House
            </h2>
            <p>
              Beauty is in the eye of the beholder, but composition is a
              science. Let us help you build the perfect gallery wall for your
              home, informed by color theory and principles of shape.<br></br>​
              <br></br>
              Developer team GAMK (Grace, Alex, Malinda, and Katrina) are proud
              to introduce Gallery House: an eye-catching application that makes
              curating the art on your wall not just easy, but fun! ​<br></br>
              <br></br>Powered by Etsy’s open API (v3), upload an image of your
              art to your gallery wall, and Gallery House shows you pieces that
              compliment it based color, sourced from one of our twelve featured
              Etsy sellers. Click on a piece of art and navigate to its Etsy
              listing, or save your gallery wall and come back to view it later.
            </p>
            <br></br>
            <p>
              Check out the&nbsp;
              <a
                href="https://gallery-house.onrender.com/"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                deployed site
              </a>
              . Check out our codebase and development assets on our&nbsp;
              <a
                href="https://github.com/gamk-capstone/gallery-house"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div>
            <h2 className="underline underline-offset-8 text-pink-900">
              Can I Cocktail?
            </h2>
            <p>
              Can I Cocktail? is a React web application that allows you to
              input the ingredients in your bar/fridge/pantry to figure out if
              you can make a cocktail. The application has limitations that the
              creators would like to expand, however we are pleased to present
              our MVP.
            </p>
            <br></br>
            <p>
              Check out the&nbsp;
              <a
                href="https://can-i-cocktail.github.io/Can-I-Cocktail/"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                deployed site
              </a>
              . Check out our codebase and learn more about our plans to improve
              our MVP on our&nbsp;
              <a
                href="https://github.com/Can-I-Cocktail/Can-I-Cocktail"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                Github
              </a>
              .
            </p>
          </div>
          <Image
            src={canICocktail}
            alt="image of a neon sign of a butler's hand presenting a tray holding a martini with an olive on a skewer"
            className="w-48"
          />
        </div>
        <div className="flex flex-row gap-5 items-center">
          <Image
            src={hopMart}
            alt="image of a plastic grocery bag with roses and the text Thank You"
            className="w-40"
          />
          <div>
            <h2 className="underline underline-offset-8 text-pink-900">
              Hop Mart
            </h2>
            <p>
              Mock e-commerce website for a bodega/corner store. Includes unique
              user experiences for guest users, logged in users, and admin
              users. Guest and logged in users can add products to their cart
              and edit or remove products once in their cart. Admin users can
              add new products and edit or remove existing products.
            </p>
            <br></br>
            <p>
              Checkout our codebase on&nbsp;
              <a
                href="https://github.com/graceshopper-team-source-capacitor/graceshopper-project"
                className="bg-black text-white p-1 hover:text-pink-900"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
