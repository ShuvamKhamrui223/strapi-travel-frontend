import Container from "../../components/common/container";
import Blogpost from "../../components/cards/Blogpost";
import { endpoints } from "../../constants/endpoints";
import { fetchFromStrapi } from "../../utils/strapiFetch";

const BlogPage = async () => {
  const data = await fetchFromStrapi(endpoints.BLOGS);
  const blogs = data.data || [];
  const paginationData = data.meta || {};
  console.log(blogs);
  return (
    <Container>
      <div className="flex flex-col gap-10 py-20">
        <h1 className="text-2xl lg:text-4xl capitalize font-bold text-foreground">
          our latest content
        </h1>
        {blogs.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {blogs.map((blog) => (
              <Blogpost postContent={blog} key={blog.documentId} />
            ))}
          </ul>
        ) : null}
      </div>
    </Container>
  );
};

export default BlogPage;
