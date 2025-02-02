import { ActionFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Link, useNavigation } from "react-router-dom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { blogId } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  const data: { id: string; title: string; body: string; userId: string } =
    await response.json();

  return { blog: data };
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const title = formData.get("title");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`,
    {
      body: JSON.stringify({ title }),
      method: "PATCH",
    }
  );

  const data = await response.json();

  return { post: data };
};

const Blog = () => {
  const { blog } = useLoaderData<typeof loader>();

  const navigation = useNavigation();

  const isSubmitting = navigation.state !== "idle";

  return (
    <>
      <Link to="/">HOME</Link>
      <div className="p-4 rounded-sm w-[360px] border">
        <h1 className="font-bold text-xl mb-3">{blog.title}</h1>
        <p>{blog.body}</p>

        <Form method="patch">
          <div className="p-3 border my-5 flex space-x-3 max-w-fit flex-col items-start">
            <input
              type="text"
              className="border"
              name="title"
              placeholder="title"
            />
            <button type="submit">
              {isSubmitting ? "Submitting" : "Update"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Blog;
