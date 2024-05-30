import { NewPosts } from "./NewPosts";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import axios from "axios";

export function Content() {
  const handlesIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  let posts = [];
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
