import styled from "styled-components";

export const NewReleasesWrapper = styled.div``;

export const NewReleasesSectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: white;
`;

export const NewReleasesContentWrapper = styled.div`
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
