import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../Images";
import ImageSlider from "./ImageSlider";
const Header = ({ title, image, type }) => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  return (
    <section className="w-full h-[100vh] mt-2">
      <ImageSlider images={images} />

      <div className="absolute w-full h-full  top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white px-4 py-4 rounded-full bg-black text-2xl md:text-3xl font-bold text-center">
          {title}
        </h1>

        {type && (
          <p className=" text-sm mt-4 text-center text-green-500 bg-[#000000] px-6 py-3 rounded-full">
            Welcome to RecipeRadar, your passport to culinary Adventures
            <br />
            Discover a treasure trove of delectable recipes from around the
            globe.
          </p>
        )}
      </div>
    </section>
  );
};

export default Header;
