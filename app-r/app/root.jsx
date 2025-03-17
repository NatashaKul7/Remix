import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import "./styles.css";
import picoCSS from "./pico.css?url";
import styles from "./styles.css?url";
import Brand from "./components/Brand";
import NavBar from "./components/NavBar";

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
      href: picoCSS,
    },
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
        <header>
          <NavBar />
          <Brand />
        </header>
        <main className="container"> {children}</main>
        <footer></footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
