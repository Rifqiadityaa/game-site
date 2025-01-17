import styled from "styled-components";

export const GenresWrapper = styled.div``;

export const GenresSectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: white;
`;

export const GenresContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
