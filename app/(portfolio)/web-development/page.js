import { Oi } from "next/font/google";

const oi = Oi({ weight: "400", subsets: ["latin"] });

export default function WebDevelopment() {
  return (
    <div className="flex flex-col items-center p-16">
      <div className={oi.className}>
        <h1 className="text-black text-center text-4xl pb-8 tracking-widest">
          WEB DEVELOPMENT
        </h1>
      </div>
      <div>
        <h2 className="underline underline-offset-8 text-pink-900">
          Gallery House
        </h2>
        <p>
          Beauty is in the eye of the beholder, but composition is a science.
          Let us help you build the perfect gallery wall for your home, informed
          by color theory and principles of shape.<br></br>​<br></br>Developer
          team GAMK (Grace, Alex, Malinda, and Katrina) are proud to introduce
          Gallery House: an eye-catching application that makes curating the art
          on your wall not just easy, but fun! ​<br></br>
          <br></br>Powered by Etsy’s open API (v3), upload an image of your art
          to your gallery wall, and Gallery House shows you pieces that
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
      <div>
        <h2 className="underline underline-offset-8 text-pink-900">
          Can I Cocktail?
        </h2>
        <p>
          Can I Cocktail? Is a React web application that allows you to input
          the ingredients in your bar/fridge/pantry to figure out of if you can
          make a cocktail. The application has limitations that the creators
          would like to expand, however we are pleased to present our MVP.
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
          . Check out our codebase and learn more about our plans to improve our
          MVP on our&nbsp;
          <a
            href="https://github.com/Can-I-Cocktail/Can-I-Cocktail"
            className="bg-black text-white p-1 hover:text-pink-900"
          >
            Github
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className="underline underline-offset-8 text-pink-900">Hop Mart</h2>
        <p>
          Mock e-commerce website for a bodega/corner store. Includes unique
          user experiences for guest users, logged in users, and admin users.
          Guest and logged in users can add products to their cart and edit or
          remove products once in their cart. Admin users can add new products
          and edit or remove existing products.
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
  );
}
