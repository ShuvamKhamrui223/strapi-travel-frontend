// component imports
import ServerDown from "./components/common/ServerDown";
import BlockRenderer from "./components/common/BlockRenderer";

// util imports
import { fetchFromStrapi } from "./utils/strapiFetch";
import { endpoints } from "./constants/endpoints";

export default async function Home() {
  const data = await fetchFromStrapi(endpoints.HOMEPAGE);
  const blocks = data?.data?.blocks || [];
  if (!data) return <ServerDown />;
  return <BlockRenderer blocks={blocks} />;
}
