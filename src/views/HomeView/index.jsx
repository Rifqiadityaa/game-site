import useGetGames from "../../libs/queries/useGetGames";
import { HomeViewWrapper } from "./styles";

const HomeView = () => {
  const { data } = useGetGames();

  console.log(data);

  return (
    <HomeViewWrapper>
      <h1>home</h1>
    </HomeViewWrapper>
  );
};

export default HomeView;
