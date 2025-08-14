// component imports
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";
import Story from "./components/story";

// util imports
import { fetchFromStrapi } from "./utils/strapiFetch";
import { endpoints } from "./constants/endpoints";

export default async function Home() {
  const {
    data: { blocks },
  } = await fetchFromStrapi(endpoints.HOMEPAGE);
  // console.log(blocks);
  return (
    <section>
      <Hero heroContent={blocks[0]} />
      <Story storyContent={blocks[1]} />
      {/* destinations */}

      {/* testimonials */}

      {/* <RecentBlogs /> */}

      <CTA ctaContent={blocks[2]} />
    </section>
  );
}
