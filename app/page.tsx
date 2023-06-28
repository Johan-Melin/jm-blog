import fs from "fs";

const getPostMetadata = () => {
  const folder = "app/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <h2>{slug}</h2>
    </div>
  ));
  return <div>{postPreviews}</div>;
}
