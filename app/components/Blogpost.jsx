import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";

const Blogpost = ({ postContent }) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="h-60 w-full lg:h-80 relative">
        <Image
          src={postContent.coverImage}
          className="object-cover rounded-2xl"
          fill
          alt={postContent.postTitle}
        />
      </div>

      <div className="px-2 flex flex-col">
        <small className="capitalize text-gray-600">
          {postContent.publishDate}
        </small>
        <Link href={"/"}>
          <h4 className="text-gray-700 font-medium max-w-[40ch] hover:text-orange-600  my-1">
            {postContent.postTitle}
          </h4>
        </Link>
        <p className="text-sm max-w-[40ch] text-gray-500">
          {postContent.postDescription}
        </p>

        <Link
          href={"/"}
          className="text-base text-orange-600 capitalize outline-1 outline-orange-400 hover:bg-orange-400 hover:text-orange-50 px-2.5 py-1 w-fit mt-3 transition-colors duration-150"
        >
          read more
        </Link>
      </div>
    </article>
  );
};

export default Blogpost;
