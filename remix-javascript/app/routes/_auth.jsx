import { Outlet } from "@remix-run/react";

const Auth = () => {
  return (
    <>
      <div>Auth layout</div>
      <Outlet />
    </>
  );
};

export default Auth;
