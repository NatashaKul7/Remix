import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import data from "../../data.json";
import fs from "fs";

export async function action({ request }) {
  console.log("action called");
  const body = await request.formData();
  const userId = body.get("userId");
  const slug = body.get("slug");
  const title = body.get("title");
  const content = body.get("content");

  const author = "John Doe";
  const createdAt = formatDate();
  const id = 7;

  const newPost = {
    id: id,
    userId: parseInt(userId),
    title: title,
    author: author,
    content: content,
    createdAt: createdAt,
    slug: slug,
  };

  const newsData = [...data, newPost];

  try {
    const filePath =
      "/Users/natashakulibaba/Desktop/Обучение IT/Remix/app-r/data.json";
    fs.writeFileSync(filePath, JSON.stringify(newsData, null, 2));
  } catch (error) {
    console.log("unexpected error:", error);
  }

  return json({ success: true });
  //return redirect("/posts")
}

export default function CreatePost() {
  const data = useActionData();
  console.log(data);
  return (
    <div>
      <form method="POST">
        <section>
          <label htmlFor="userId">User ID:</label>
          <input type="number" name="userId" />
        </section>
        <section>
          <label htmlFor="slug">Slug:</label>
          <input type="text" name="slug" />
        </section>
        <section>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
        </section>
        <section>
          <label htmlFor="content">Content:</label>
          <input type="text" name="content" />
        </section>
        <section>
          <button type="submit">Create Post</button>
        </section>
      </form>
    </div>
  );
}

function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  const timezoneOffsetMinutes = Math.abs(timezoneOffset % 60);
  const timezoneSign = timezoneOffset >= 0 ? "-" : "+";

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${String(
    timezoneOffsetHours
  ).padStart(2, "0")}:${String(timezoneOffsetMinutes).padStart(2, "0")}`;

  return formattedDate;
}
