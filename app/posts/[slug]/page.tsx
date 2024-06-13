import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostContent(params.slug);
  if (!post) {
    return {
      title: "Not found",
      description: "The page was not found",
    };
  }
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const postPage = (props: any) => {
  const { slug } = props.params;
  const post = getPostContent(slug);
  const postDate = new Date(post.data.date);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{post.data.title}</h1>
      <p className="text-white">{postDate.toLocaleDateString()}</p>
      <article className="max-w-5xl prose prose-sky prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default postPage;
