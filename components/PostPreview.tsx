import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

/*const calculateDaysDiff = (dateString: string): number => {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();

  return Math.ceil(
    Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );
};*/

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="p-4 bg-white border rounded-md shadow-md">
        <p className="text-xs text-gray">
          {new Date(Date.parse(props.date)).toLocaleDateString("en-US", {
            //weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h2 className="text-2xl font-bold hover:text-violet-800">
          {props.title}
        </h2>
        <p className="text-dark">{props.subtitle}</p>
        {props.tags.map((tag) => (
          <span className="p-1 rounded-md hover:bg-light">#{tag} </span>
        ))}
      </div>
    </Link>
  );
};

export default PostPreview;
