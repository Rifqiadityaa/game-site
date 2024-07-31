import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import useGetGameDetails from "../../libs/queries/usetGetGameDetails";
import {
  DetailsDescription,
  DetailsViewContentWrapper,
  DetailsViewWrapper,
} from "./styles";

const DetailsView = () => {
  const params = useParams();

  const { data, isFetching } = useGetGameDetails(
    params.id,
    {},
    {
      enabled: !!params.id,
    }
  );

  if (isFetching)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PuffLoader color="#0072CE" />
      </div>
    );

  if (!data) return null;

  return (
    <DetailsViewWrapper $bgImage={data?.data?.background_image}>
      <DetailsViewContentWrapper>
        <h1>{data?.data?.name}</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <p>{data?.data?.platforms[0]?.platform?.name}</p>
          <p>&#x2022;</p>
          <p>{data?.data?.developers[0]?.name}</p>
          <p>&#x2022;</p>
          <p>{data?.data?.released}</p>
        </div>
        <DetailsDescription>{data?.data?.description_raw}</DetailsDescription>
      </DetailsViewContentWrapper>
    </DetailsViewWrapper>
  );
};

export default DetailsView;
