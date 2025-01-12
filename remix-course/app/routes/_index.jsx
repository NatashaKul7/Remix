// import { NavLink } from "@remix-run/react";

// export const meta = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export default function Index() {
//   return (
//     <main id="content">
//       <h1>A better way of keeping track of your notes</h1>
//       <p>Tru our early beta and never loose track of your notes again!</p>
//       <p id="cta">
//         <NavLink to="/notes">Try Now!</NavLink>
//       </p>
//     </main>
//   );
// }

// export function links() {
//   return [
//     {
//       rel: "stylesheet",
//       href: "/styles/home.css",
//     },
//   ];
// }

import { Link } from "@remix-run/react";

import homeStyles from "../../public/styles/home.css";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
