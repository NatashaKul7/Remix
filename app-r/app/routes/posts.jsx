import { Link, NavLink, useNavigate } from "@remix-run/react";

// export const meta = () => {
//   return [
//     { title: "Posts Page" },
//     { name: "Description", content: " welcome to all of out posts" },
//   ];
// };

export const meta = ({ matches }) => {
  const parentMeta = matches.flatMap((match) => match.meta ?? []);
  return [
    ...parentMeta,
    { name: "Description", content: "This is a custom blog" },
  ];
};

export default function Posts() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <br />
      <Link to="/about" state={{ some: "value" }}>
        About
      </Link>
      <br />

      <NavLink
        to="/posts"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        Posts
      </NavLink>
      <br />

      <NavLink to="/about">About</NavLink>

      <button onClick={handleClick}>Go back</button>
    </>
  );
}
