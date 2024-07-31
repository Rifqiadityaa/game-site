import styled from "styled-components";

export const GamesByGenreWrapper = styled.div`
  padding: 5rem 10rem;

  @media (max-width: 1024px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const GamesByGenreSectionTitle = styled.h2`
  text-transform: capitalize;
  color: white;
  margin-bottom: 1.5rem;
`;

export const GamesByGenreContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GamesByGenreLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
