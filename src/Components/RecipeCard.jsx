import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { image, label, cuisineType, dietLabels, mealType, uri } =
      recipe?.recipe;

    const id = uri?.split("#")[1];

  return (
    <Link
      to={{
        pathname: `/recipes/${id}`,
        state: { image }, // Pass the image as state
      }}
      className=" shadow-lg shadow-[#242424] scale-95 transition-all duration-200 hover:scale-105"
    >
      <section className=" bg_gradient shadow-lg rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[12.5rem] md:h-[9.4rem] w-full  object-cover"
        />
        <div className="p-3">
          <p className="text-white font-semibold">Name:&nbsp;{label}</p>
        </div>
        <div className="mt-2">
          <p className=" px-2 py-1 text-[0.9rem] capitalize mr-3 text-slate-200">
            Type:&nbsp;{cuisineType}
          </p>
          <p className=" px-2 py-1  text-[0.9rem] capitalize mr-3 text-slate-200">
            Meal:&nbsp;{mealType}
          </p>
          <p className=" px-2 py-1  text-[0.9rem] capitalize mr-3 text-slate-200">
            Diet Label:&nbsp;{dietLabels}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default RecipeCard;