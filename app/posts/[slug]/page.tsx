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

  return (
    <div>
      <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
      <article className="prose prose-slate">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default postPage;
