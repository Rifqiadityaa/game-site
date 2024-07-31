import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import DetailsCard from "../../../components/DetailsCard";
import useGetGames from "../../../libs/queries/useGetGames";
import {
  NewReleasesContentWrapper,
  NewReleasesSectionTitle,
  NewReleasesWrapper,
} from "./styles";

const NewReleases = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useGetGames({
    ordering: "-released",
    metacritic: "80, 100",
    page_size: 10,
  });

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

  const handleCardClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <NewReleasesWrapper>
      <NewReleasesSectionTitle>New Releases</NewReleasesSectionTitle>
      <NewReleasesContentWrapper>
        {data?.data?.results?.map((it) => {
          return (
            <DetailsCard
              key={it.id}
              data={it}
              onClick={() => handleCardClick(it.id)}
            />
          );
        })}
      </NewReleasesContentWrapper>
    </NewReleasesWrapper>
  );
};

export default NewReleases;

NewReleases.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
