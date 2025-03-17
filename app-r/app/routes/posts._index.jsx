import PostsList from "../components/PostsList";
import posts from "../../data.json";

// export async function loader() {
//   return posts;
// }

export default function PostsLandingPage() {
  return <PostsList posts={posts} />;
}
