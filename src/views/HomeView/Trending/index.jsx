import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import WideCard from "../../../components/WideCard";
import {
  TrendingCardWrapper,
  TrendingSectionTitle,
  TrendingWrapper,
} from "./styles";

const Trending = ({ data, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading)
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

  const handleTrendingCardClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <TrendingWrapper>
      <TrendingSectionTitle>Trending Now</TrendingSectionTitle>
      <TrendingCardWrapper>
        {data.map((it) => {
          return (
            <WideCard
              key={it.id}
              title={it.name}
              bgImage={it.background_image}
              onClick={() => handleTrendingCardClick(it.id)}
            />
          );
        })}
      </TrendingCardWrapper>
    </TrendingWrapper>
  );
};

export default Trending;

Trending.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
