import { Link, Links, useNavigate } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/posts");
  };

  return (
    <>
      <a href="/posts">Posts </a>
      <br />
      <Link to="/posts">Posts via a tag</Link>
      <br />
      <Link
        to={{
          pathname: "/posts",
          search: "?query=string",
          hash: "#hash",
        }}
      >
        Posts
      </Link>
      <br />
      <Link to="/posts" prefetch="intent">
        Posts
      </Link>

      <button onClick={handleClick}>Submin</button>
    </>
  );
}
