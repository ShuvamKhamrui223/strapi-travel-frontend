import Container from "../../../components/common/container";

const BlogDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  return <Container>blog details of {blogId}</Container>;
};

export default BlogDetailsPage;
