import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

/*const calculateDaysDiff = (dateString: string): number => {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();

  return Math.ceil(
    Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );
};*/

const imageSize = {
  width: 384,
  height: 256,
};

const PostPreview = (props: PostMetadata) => {
  const postDate = new Date(props.date);

  const postInfo = (
    <div className="flex flex-row justify-between">
      <p>
        {postDate.toLocaleDateString("en-US", {
          //weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );

  return (
    <div className="p-4">
      <Link href={`/posts/${props.slug}`} className="flex flex-row ">
        <div className="relative overflow-hidden">
          <Image
            src={`/images/${props.image}`}
            alt={props.alt}
            {...imageSize}
            loading="lazy"
            className=""
          />
        </div>
        <div>
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-dark px-1 pb-0.5 rounded-md hover:bg-gray"
            >
              {tag}{" "}
            </span>
          ))}
          <h2 className="font-bold text-l group-hover:underline text-dark">
            {props.title}
          </h2>
          <div className="text-xs text-dark">
            <p className="my-1">{props.subtitle}</p>
            {postInfo}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
