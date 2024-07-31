import PropTypes from "prop-types";
import { WideCardWrapper } from "./styles";

const WideCard = ({ title, bgImage, onClick }) => {
  return (
    <WideCardWrapper $bgImage={bgImage} onClick={onClick}>
      <h2>{title}</h2>
    </WideCardWrapper>
  );
};

export default WideCard;

WideCard.propTypes = {
  title: PropTypes.string,
  bgImage: PropTypes.string,
  onClick: PropTypes.func,
};
