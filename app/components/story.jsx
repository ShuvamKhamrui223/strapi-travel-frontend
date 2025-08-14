import SectionWithImage from "./common/SectionWithImage"

const Story = ({storyContent}) => {
  return (
    <>
     <SectionWithImage SectionWithImageContent={storyContent.story}/> 
    </>
  )
}

export default Story
