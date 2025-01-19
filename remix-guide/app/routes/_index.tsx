import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data: { id: string; title: string; body: string; userId: string }[] =
    await response.json();

  return { blogs: data };
};

export default function Index() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-4 gap-3">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-3 shadow-md rounded-sm">
          {blog.body}
        </div>
      ))}
    </div>
  );
}
