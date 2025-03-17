import { useLoaderData } from "@remix-run/react";
import posts from "../../data.json";
import Post from "../components/Post";

export async function loader({ params }) {
  const slug = params.slug;

  const post = posts.find((item) => item.slug === slug);

  return post;
}

export default function SinglePost() {
  const post = useLoaderData();

  return <Post post={post} />;
}
