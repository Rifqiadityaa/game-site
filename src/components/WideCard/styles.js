import { url } from "inspector";
import styled from "styled-components";

export const WideCardWrapper = styled.div`
  background: ${(props) => url(props.bgImage)};
`;
