import styled from "styled-components";

export const DetailsViewWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const DetailsViewContentWrapper = styled.div`
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const DetailsDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;
