import styled from "styled-components";

export const DetailsCardWrapper = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    height: 250px;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const DetailsCardTitle = styled.h5`
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DetailsCardInfo = styled.div`
  border: 1px solid #383838;
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: none;
  padding: 0.5rem;
`;
