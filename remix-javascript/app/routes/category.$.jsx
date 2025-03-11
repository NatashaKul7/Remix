export default function Category() {
  return <h1>Category</h1>;
}

export const loader = ({ params }) => {
  const param = params["*"];
  console.log("param:", param);
  return param;
};
