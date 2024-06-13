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
  width: 512,
  height: 512,
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
    <div className="p-4 bg-[rgba(0,0,0,0.5)] border-2 shadow-md rounded-2xl ">
      <Link href={`/posts/${props.slug}`} className="group">
        <div className="relative overflow-hidden">
          <Image
            src={`/images/${props.image}`}
            alt={props.alt}
            {...imageSize}
            loading="lazy"
            className="duration-200 ease-in-out group-hover:blur-sm group-hover:scale-105 bg-gray"
            placeholder="blur"
            blurDataURL={props.imageBlurData}
          />
          {props.animImage !== "" && (
            <Image
              src={`/images/${props.animImage}`}
              alt={props.alt}
              {...imageSize}
              loading="lazy"
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>
        <div>
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-light px-1 pb-0.5 rounded-md hover:bg-gray"
            >
              {tag}{" "}
            </span>
          ))}
          <h2 className="font-bold text-l group-hover:underline text-white">
            {props.title}
          </h2>
          <div className="text-xs text-light">
            <p className="my-1">{props.subtitle}</p>
            {postInfo}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
