import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import "./styles.css";
import styles from "./styles.css?url";
import Brand from "./components/Brand";

export const meta = () => {
  return [
    { title: "Tech Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <Brand />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function NavBar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "red" : "black",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/demo"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            Demo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
