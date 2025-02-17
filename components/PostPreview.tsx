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
        })} -  {props.author}
      </p>
    </div>
  );

  return (
    <div className="flex space-x-2 flex-col sm:flex-row">
      <div className="relative overflow-hidden">
        <Link href={`/posts/${props.slug}`}>
          <Image
            src={`/images/${props.image}`}
            alt={props.alt}
            {...imageSize}
            loading="lazy"
            className=""
          />
          </Link>
        </div>
        <div>
          <div className="flex space-x-2">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm"
              >
                {tag}{" "}
              </span>
            ))}
          </div>
          <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-xl group-hover:underline">
              {props.title}
            </h2>
          </Link>
          <div className="text-s">
            <p>{postInfo}</p>
            <p className="my-1">{props.subtitle}</p>
          </div>
        </div>
    </div>
  );
};

export default PostPreview;
