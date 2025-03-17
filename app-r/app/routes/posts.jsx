import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
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

export default function Posts() {
  return (
    <>
      <Outlet />
    </>
  );
}
