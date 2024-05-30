import { NewPosts } from "./NewPosts";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import axios from "axios";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handlesIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json').then(response => {
    // handle success
    console.log(response);
    setPosts(response.data)
  });
  }
  return (
    <div>
      <NewPosts />
      <br></br>
      <button title="PressHere" onClick={handlesIndexPosts}>
        BIG RED BUTTON
      </button>
      <PostsIndex posts={posts} />
    </div>
  );
}
