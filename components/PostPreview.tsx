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

const PostPreview = (props: PostMetadata) => {
  const postDate = new Date(props.date);

  return (
    <Link href={`/posts/${props.slug}`} className="group">
      <div className="relative overflow-hidden">
        <Image
          src={`/images/${props.image}`}
          alt={props.alt}
          width={512}
          height={512}
          loading="lazy"
          className="duration-200 ease-in-out group-hover:blur-sm group-hover:scale-105 bg-gray"
          placeholder="blur"
          blurDataURL={props.imageBlurData}
        />
        {props.animImage !== "" && (
          <Image
            src={`/images/${props.animImage}`}
            alt={props.alt}
            width={512}
            height={512}
            loading="lazy"
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
          />
        )}
        <p className="absolute inset-0 flex items-center p-2 text-center text-white duration-200 ease-in-out translate-y-full opacity-0 bg-dark bg-opacity-40 group-hover:opacity-100 group-hover:translate-y-0">
          {props.subtitle}
        </p>
      </div>
      <div className="p-4 bg-white border rounded-md shadow-md border-light">
        <div className="flex flex-row justify-between">
          <p className="text-xs text-gray">
            {postDate.toLocaleDateString("en-US", {
              //weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-gray">{props.time}</p>
        </div>
        <h2 className="text-2xl font-bold group-hover:underline">
          {props.title}
        </h2>
        {props.tags.map((tag) => (
          <span className="p-1 rounded-md hover:bg-light">#{tag} </span>
        ))}
      </div>
    </Link>
  );
};

export default PostPreview;
