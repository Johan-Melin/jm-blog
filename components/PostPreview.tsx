import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="p-4 bg-white border rounded-md shadow-md border-violet-200">
        <p className="text-xs text-slate-400">{props.date}</p>
        <h2 className="text-2xl font-bold hover:text-violet-600">
          {props.title}
        </h2>
        <p className="text-slate-700">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
