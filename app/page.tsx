import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();

  postMetadata.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className="grid grid-cols-1 gap-4">{postPreviews}</div>;
}
