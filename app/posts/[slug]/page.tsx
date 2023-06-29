import fs from "fs";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const postPage = (props: any) => {
  const { slug } = props.params;
  const content = getPostContent(slug);

  return <p>This is a post! {content}</p>;
};

export default postPage;
