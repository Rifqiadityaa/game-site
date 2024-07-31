import styled from "styled-components";

export const HomeViewWrapper = styled.div`
  padding: 0 10rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
