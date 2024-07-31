import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import WideCard from "../../../components/WideCard";
import useGetGenres from "../../../libs/queries/useGetGenres";
import {
  GenresContentWrapper,
  GenresSectionTitle,
  GenresWrapper,
} from "./styles";

const Genres = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useGetGenres({
    ordering: "-released",
    metacritic: "80, 100",
    page_size: 10,
  });

  console.log(data);

  if (isFetching)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PuffLoader color="#0072CE" />
      </div>
    );

  if (!data) return null;

  const handleCardClick = (name) => {
    navigate(`/games/genre/${name}`);
  };

  return (
    <GenresWrapper>
      <GenresSectionTitle>Genres</GenresSectionTitle>
      <GenresContentWrapper>
        {data?.data?.results?.map((it) => {
          return (
            <WideCard
              key={it.id}
              bgImage={it.image_background}
              title={it.name}
              onClick={() => handleCardClick(it.slug)}
            />
          );
        })}
      </GenresContentWrapper>
    </GenresWrapper>
  );
};

export default Genres;

Genres.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
