import { useMatches } from "@remix-run/react";
import PostsList from "../components/PostsList";

export default function PostsLandingPage() {
  const matches = useMatches();

  const posts = matches[1].data;

  return <PostsList posts={posts} />;
}
