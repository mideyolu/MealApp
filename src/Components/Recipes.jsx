import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const HandleChange = (e) => {
    setQuery(e.target.value);
  };
  const fetchRecipe = async () => {
      setLoading(true);
    try {
      const data = await fetchRecipes({ query, limit });

      setRecipes(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const HandleSearchRecipe = async(e)=>{
    e.preventDefault();
    fetchRecipe();
  }


  const ShowMore = () => {
    setLimit(prev => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    setLoading(true);

    fetchRecipe();
  }, [limit]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />;
      </div>
    );
  }

  return (
    <section className="w-full pt-5">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={HandleSearchRecipe}>
          <SearchBar
            placeholder="e.g Cake, vegan , Chicken "
            handleInputChange={HandleChange}
            rightIcon={<BsSearch />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className=" w-full grid grid-cols-1 items-center md:grid-cols-3 gap-7 px-0 lg:px-10 py-10 ">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="text-white flex items-center justify-center py-10">
            <button
              className=" bg-slate-200 px-3 py-2 text-sm transition-all duration-200 scale-90 hover:scale-105 rounded-lg text-black"
              onClick={ShowMore}
            >
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className="text-slate-200 text-md text-center py-4">
          <p>No Recipe Found</p>
        </div>
      )}
    </section>
  );
};

export default Recipes;
