import { useState } from "react";
import Post from "./Post";

export default function PostList() {
  const [postsList, setPostsList] = useState([
    {
      id: 1,
      firstname: 'Laura',
      lastname: 'Fisher',
      text: "This was one of the most epic journeys, that i've got myself involved in. Maybe one of the most memorizable in my entire life!",
      pictures: ["https://source.unsplash.com/300x350/?nature", "https://source.unsplash.com/300x350/?beach", "https://source.unsplash.com/300x350/?beach", "https://source.unsplash.com/300x350/?beach", "https://source.unsplash.com/300x350/?beach"]
    }
  ]);

  return <div>
    {postsList.map(post => {
      return <div key={post.id}>
        <Post firstname={post.firstname} lastname={post.lastname} text={post.text} pictures={post.pictures} time="12 hours ago" />
      </div>
    })}
  </div>
}