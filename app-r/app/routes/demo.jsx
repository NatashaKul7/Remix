import { json } from "@remix-run/react";

export async function loader() {
  const data = {
    key: "value",
  };
  //   const body = JSON.stringify(data);

  return json(data, { status: 404 });

  //   return new Response(body, {
  //     headers: {
  //       "Content-type": "application/json; charset=utf8",
  //     },
  //   });
}

// export default function Demo() {
//   return <h1>Demo page</h1>;
// }
