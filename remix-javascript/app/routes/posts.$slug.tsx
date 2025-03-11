import React from "react";

export async function loader({ params }) {
  const slug = params.slug;
  console.log(slug);
  return slug;
}

export default function SinglePost() {
  return <h1>Single Post</h1>;
}
