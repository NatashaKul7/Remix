import { Link, NavLink, useNavigate } from "@remix-run/react";
// import "../styles.css";

export const meta = () => {
  return [
    { title: "Posts Page" },
    { name: "Description", content: " welcome to all of out posts" },
  ];
};

// export const meta = ({ matches }) => {
//   const parentMeta = matches.flatMap((match) => match.meta ?? []);
//   return [
//     ...parentMeta,
//     { name: "Description", content: "This is a custom blog" },
//   ];
// };

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    url: "/singlePost1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-04-23T00:00:00Z",
  },
  {
    id: 2,
    title: "Second Blog Post",
    url: "/singlePost2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-04-23T00:00:00Z",
  },
  {
    id: 3,
    title: "Third Blog Post",
    url: "/singlePost3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-04-23T00:00:00Z",
  },
  {
    id: 4,
    title: "Fourth Blog Post",
    url: "/singlePost4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-04-23T00:00:00Z",
  },
];

export default function Posts() {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2 className="blog-post-title">
            <a href={post.url}>{post.title}</a>
          </h2>
          <p className="blog-post-content">
            {post.content.split(" ").slice(0, 20).join(" ")}
            {post.content.split(" ").length > 20 && "..."}
          </p>
          <p className="blog-post-date">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </>
  );
}
