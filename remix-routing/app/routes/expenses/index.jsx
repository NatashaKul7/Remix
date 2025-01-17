import { Outlet } from "@remix-run/react";

export default function ExpensesPage() {
  return (
    <>
      <h1>Expenses Page</h1>
      <Outlet />
    </>
  );
}
