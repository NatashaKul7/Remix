import { Outlet } from "@remix-run/react";

const BlogLayout = () => {
  return (
    <div>
      <header> BlogLayout</header>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
