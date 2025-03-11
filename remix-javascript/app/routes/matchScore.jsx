import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  const scores = [
    { id: 1, team: "Team1", goals: 3, some_key: "some_value" },
    { id: 2, team: "Team2", goals: 2, some_key: "some_value" },
  ];

  return scores;
};

export default function MatchScore() {
  const scores = useLoaderData();

  return (
    <>
      <h1>Match Score</h1>
      <br />
      {scores.map((item) => (
        <>
          <ul>
            <li id={item.id}>
              <h2>
                Team name: <i> & Score: {item.goals}</i>
              </h2>
            </li>
          </ul>
        </>
      ))}
    </>
  );
}
