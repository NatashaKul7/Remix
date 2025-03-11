import { Outlet } from "@remix-run/react";

const Posts = () => {
  return (
    <>
      <div>Posts</div>
      <Outlet />
    </>
  );
};

export default Posts;
