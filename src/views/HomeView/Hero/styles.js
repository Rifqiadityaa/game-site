import styled from "styled-components";

export const HeroWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(31, 31, 31, 1)),
    url(${(props) => props.$bgImage});
  height: 70vh;
  background-size: cover;
  background-position: center 0%;
`;

export const HeroLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  padding: 0 10rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const HeroLogo = styled.img`
  height: 200px;
  width: 300px;
  position: absolute;
  bottom: 15%;

  @media (max-width: 768px) {
    height: 150px;
    width: 250px;
  }
`;
