import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "../../public/styles/note-details.css";
import { getStoredNotes } from "../data/notes";

export function meta({ data }) {
  return {
    title: data.title,
    description: "Manage your notes with ease",
  };
}

export default function noteDetailsPage() {
  const note = useLoaderData;

  return (
    <main>
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-detail-content">{note.content}</p>
    </main>
  );
}

export async function loader({ params }) {
  const { noteId } = params;
  const notes = await getStoredNotes();
  const selectedNote = notes.find((note) => note.id === noteId);

  if (!selectedNote) {
    throw json(
      { message: "Could nor find node for id" + noteId },
      { status: 404 }
    );
  }

  return selectedNote;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
