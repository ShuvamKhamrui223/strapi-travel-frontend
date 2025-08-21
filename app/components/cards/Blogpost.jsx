import Image from "next/image";
import Link from "next/link";
import { getStrapiImage } from "../../utils/strapiFetch";
import { formatDate } from "../../utils/formatter";

const Blogpost = ({ postContent }) => {
  if (!postContent) return null;
  return (
    <article className="flex flex-col gap-4">
      {postContent.thumbnail ? (
        <div className="h-60 w-full lg:h-80 relative">
          <Image
            src={getStrapiImage(postContent.thumbnail.url)}
            className="object-cover rounded-2xl"
            fill
            alt={postContent.thumbnail.alternativeText ?? postContent.title}
          />
        </div>
      ) : null}

      <div className="px-2 flex flex-col">
        <small className="capitalize text-gray-600">
          {formatDate(postContent.publishedAt)}
        </small>
        <Link href={`/blog/${postContent.slug}`}>
          <h3 className="text-gray-700 font-medium max-w-[40ch] hover:text-orange-600  my-1">
            {postContent.title}
          </h3>
        </Link>
        <p className="text-sm line-clamp-2 text-gray-500">
          {postContent.description}
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
