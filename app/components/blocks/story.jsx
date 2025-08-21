import SectionWithImage from "../common/SectionWithImage";

const Story = ({ storyContent }) => {
  return (
    <section id="story">
      <SectionWithImage SectionWithImageContent={storyContent.story} />
    </section>
  );
};

export default Story;
