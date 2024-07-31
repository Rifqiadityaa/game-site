import styled from "styled-components";

export const TrendingWrapper = styled.div``;

export const TrendingSectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: white;
`;

export const TrendingCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
