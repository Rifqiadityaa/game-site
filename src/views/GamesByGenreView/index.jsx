import { useNavigate, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import DetailsCard from "../../components/DetailsCard";
import useGetGames from "../../libs/queries/useGetGames";
import {
  GamesByGenreContentWrapper,
  GamesByGenreLoaderContainer,
  GamesByGenreSectionTitle,
  GamesByGenreWrapper,
} from "./styles";

const GamesByGenreView = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data, isFetching } = useGetGames(
    {
      genres: name,
    },
    {
      enabled: !!name,
    }
  );

  const handleCardClick = (id) => {
    navigate(`/game/${id}`);
  };

  if (isFetching) {
    return (
      <GamesByGenreLoaderContainer>
        <PuffLoader color="#0072CE" />
      </GamesByGenreLoaderContainer>
    );
  }

  if (!data) return null;

  return (
    <GamesByGenreWrapper>
      <GamesByGenreSectionTitle>{`${name} Games`}</GamesByGenreSectionTitle>
      <GamesByGenreContentWrapper>
        {data?.data?.results?.map((it) => {
          return (
            <DetailsCard
              key={it.id}
              data={it}
              onClick={() => handleCardClick(it.id)}
            />
          );
        })}
      </GamesByGenreContentWrapper>
    </GamesByGenreWrapper>
  );
};

export default GamesByGenreView;
