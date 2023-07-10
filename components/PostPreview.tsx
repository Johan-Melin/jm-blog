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
  return (
    <Link href={`/posts/${props.slug}`}>
      <Image src={`/images/${props.image}`} alt="" width="640" height="426" />
      <div className="p-4 bg-white border rounded-md shadow-md border-light">
        <div className="flex flex-row justify-between">
          <p className="text-xs text-gray">
            {new Date(Date.parse(props.date)).toLocaleDateString("en-US", {
              //weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-gray">{props.time} min read</p>
        </div>
        <h2 className="text-2xl font-bold hover:text-link">{props.title}</h2>
        <p className="text-dark">{props.subtitle}</p>
        {props.tags.map((tag) => (
          <span className="p-1 rounded-md hover:bg-light">#{tag} </span>
        ))}
      </div>
    </Link>
  );
};

export default PostPreview;
