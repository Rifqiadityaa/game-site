import PropTypes from "prop-types";
import {
  DetailsCardInfo,
  DetailsCardTitle,
  DetailsCardWrapper,
} from "./styles";

const DetailsCard = ({ data, onClick }) => {
  return (
    <DetailsCardWrapper onClick={onClick}>
      <img src={data.background_image} />
      <DetailsCardInfo>
        <DetailsCardTitle>{data.name}</DetailsCardTitle>
      </DetailsCardInfo>
    </DetailsCardWrapper>
  );
};

export default DetailsCard;

DetailsCard.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};
