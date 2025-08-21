import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../blocks/Hero"));
const Story = dynamic(() => import("../blocks/story"));
const Journey = dynamic(() => import("../blocks/journey"));
const Team = dynamic(() => import("../blocks/team"));
const Testimonials = dynamic(() => import("../blocks/testimonials"));
const CTA = dynamic(() => import("../blocks/CTA"));
function blockRenderer(block, index) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero heroContent={block} key={block.__component ?? index} />;
    case "blocks.story":
      return <Story storyContent={block} key={block.__component ?? index} />;
    case "blocks.trip":
      return (
        <Journey journeyContent={block} key={block.__component ?? index} />
      );
    case "blocks.team-members":
      return <Team teamContent={block} key={block.__component ?? index} />;
    case "blocks.testimonials":
      return (
        <Testimonials
          testimonialsContent={block}
          key={block.__component ?? index}
        />
      );
    case "blocks.cta":
      return <CTA ctaContent={block} key={block.__component ?? index} />;

    default:
      return null;
  }
}
const BlockRenderer = ({ blocks }) => {
  return blocks.map((block, index) => blockRenderer(block, index));
};

export default BlockRenderer;
