import { useLocation } from "@remix-run/react";

export default function About() {
  const location = useLocation();
  console.log(location);
  return <h1>About page</h1>;
}
