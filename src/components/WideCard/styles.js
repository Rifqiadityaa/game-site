import styled from "styled-components";

export const WideCardWrapper = styled.div`
  padding: 3rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bgImage});
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.75rem;
  text-align: center;
  position: relative;
  height: 170px;
  background-position: center 0%;

  &:hover {
    cursor: pointer;
  }
`;
