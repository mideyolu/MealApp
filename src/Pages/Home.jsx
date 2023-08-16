import React from "react";
import Header from "../Components/Header";
import Recipes from "../Components/Recipes";

const Home = () => {
  return (
    <main className=" w-full flex flex-col">
      <Header
        title={
          <p>
            Taste The World with <br />
            RecipeRadar!
          </p>
        }
        type="home"
      />

      <section id="recipes" className="md:max-w-[1440px] mx-auto w-full px-4 bg-black ">
        <Recipes />
      </section>
    </main>
  );
};

export default Home;
