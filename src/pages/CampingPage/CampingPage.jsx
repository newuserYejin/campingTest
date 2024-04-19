import { useCampingDetailQuery } from "../../hooks/useCampingDetail";

export default function CampingPage() {
  const pageNo = 1;
  const { data } = useCampingDetailQuery(pageNo);

  console.log("data", data)

  return (
    <ul style={{ marginTop: "150px" }}>
      {data &&
        data.item.map((value) => (
          <li>
            <a href={`/campings/${value.contentId}?keyword=${value.facltNm}&lat=${value.mapY}&lon=${value.mapX}`}>
              {value.facltNm}
            </a>
          </li>
        ))}
    </ul>
  );
}
