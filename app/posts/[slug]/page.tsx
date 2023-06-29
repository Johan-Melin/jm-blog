import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const postPage = (props: any) => {
  const { slug } = props.params;
  const content = getPostContent(slug);

  return (
    <div>
      <p>This is a post! {slug}</p>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default postPage;
