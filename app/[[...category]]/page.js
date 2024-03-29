import HomeContainer from "@/containers/home";
import React from "react";
import Movies from "../../mocks/movies.json";
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Home = async ({ params }) => {
  await delay(3000);
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ? params.category?.[0] : "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
};

export default Home;
