import { blogs } from "../constants";
import Blogpost from "./Blogpost";
import Container from "./common/container";

const RecentBlogs = () => {
  return (
    <section className="py-20 flex flex-col">
      <Container>
        <h2 className="text-6xl capitalize font-bold text-gray-500 mb-8">
          recent <span className="text-orange-400">posts</span>
        </h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {blogs.slice(0, 4).map((blog, index) => (
            <Blogpost postContent={blog} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogs;
