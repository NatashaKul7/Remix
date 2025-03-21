import { useLoaderData, useMatches } from "@remix-run/react";

import Post from "../components/Post";

export async function loader({ params }) {
  const slug = params.slug;

  return slug;
}

export default function SinglePost() {
  const slug = useLoaderData();

  const matches = useMatches();

  const posts = matches[1].data;
  const post = posts.find((post) => post.slug === slug);
  return <Post post={post} />;
}
