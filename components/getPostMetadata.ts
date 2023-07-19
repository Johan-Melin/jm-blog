import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      published: matterResult.data.published,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
      time: matterResult.data.time,
      image: matterResult.data.image,
      alt: matterResult.data.alt,
      imageBlurData: matterResult.data.imageBlurData,
      animImage: matterResult.data.animImage,
    };
  });

  const publishedPosts = posts.filter((post) => post.published === true);

  return publishedPosts;
};

export default getPostMetadata;