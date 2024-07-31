import useGetGames from "../../libs/queries/useGetGames";
import Genres from "./Genres";
import Hero from "./Hero";
import NewReleases from "./NewReleases";
import { HomeViewWrapper } from "./styles";
import Trending from "./Trending";

const HomeView = () => {
  const { data, isFetching } = useGetGames({
    ordering: "-added",
    page_size: 3,
  });

  return (
    <>
      <Hero />
      <HomeViewWrapper>
        <Trending data={data?.data?.results} isLoading={isFetching} />
        <NewReleases />
        <Genres />
      </HomeViewWrapper>
    </>
  );
};

export default HomeView;
