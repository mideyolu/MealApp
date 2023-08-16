import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from "../Components/Loading";
import Header from "../Components/Header";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import RecipeCard from '../Components/RecipeCard'
import { useLocation } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { image } = location.state || {};

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 });

      setRecipes(recommend);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full bg-black h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full bg-black">
      <Header title={recipe?.label} image={recipe?.image} />

      <div className=" w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className=" text-slate-100 text-center border py-1 px-2 rounded-full mb-2 border-gray-30">
              {recipe?.calories.toFixed(2)}
            </span>
            <p className="text-slate-100 text-center text-lg md:text-xl">
              Calories
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <span className=" text-slate-100 text-center border py-1 px-2 rounded-full mb-2 border-gray-30">
              {recipe?.totalTime}
            </span>
            <p className="text-slate-100 text-center text-lg md:text-xl">
              Total Time
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <span className=" text-slate-100 text-center border py-1 px-2 rounded-full mb-2 border-gray-30">
              {recipe?.yield}
            </span>
            <p className="text-slate-100 text-center text-lg md:text-xl">
              Servings
            </p>
          </div>
        </div>
      </div>

      <div className="w-full text-slate-100 px-4 lg:px-20 pt-5">
        <div className="w-full  flex flex-col md:flex-row gap-8 py-15 px-4 md:px-10">
          <div className="flex mr-3 flex-col gap-5">
            <p className="text-slate-200 text-2xl">Ingredients:</p>
            {recipe?.ingredientLines?.map((item, index) => {
              return (
                <p className="text-lg flex gap-2 md:text-md" key={index}>
                  <AiFillPushpin size={22} /> {item}
                </p>
              );
            })}

            <div>
              <img src={image} alt="Recipe" />
            </div>
          </div>
          <div className="md:border-r border-slate-200 pr-1"></div>

          <div className=" w-full md:w-2/4">
            <>
              <p className="text-slate-200 text-3xl md:text-2xl lg:text-xl text-center font-bold">
                Also Check This
              </p>
              <div className=" w-full grid grid-cols-2 items-center md:grid-cols-1 gap-7 px-0 lg:px-10 py-10 ">
                {recipes?.map((item, index) => (
                  <RecipeCard recipe={item} key={index} />
                ))}
              </div>
            </>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-20">
          <p className="text-2xl underline">Health Labels</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
            {recipe?.healthLabels.map((item, index) => (
              <p className="flex gap-2">
                <BsPatchCheck />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
