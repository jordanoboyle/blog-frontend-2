import { NewPosts } from "./NewPosts";
import { PostsIndex } from "./PostsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState ({})
  
  const handlesIndexPosts = () => {
    axios.get('http://localhost:3000/posts.json').then(response => {
    // handle success
    setPosts(response.data)
  });
  }

  const handleShowPost = (thePost) => {
    console.log("show the post")
    setIsPostsShowVisible(true);
    setCurrentPost(thePost);
  }
  const handleClose = () => {
    console.log("show me closing modal")
    setIsPostsShowVisible(false);
  }

  useEffect(handlesIndexPosts, [])
  return (
    <div>
      <NewPosts />
      <br></br>
      <button title="PressHere" onClick={handlesIndexPosts}>
        BIG RED BUTTON
      </button>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}> {/*This is where the close button needs to be*/}
        <PostsShow post={currentPost}/>
      </Modal>
    </div>
  );
}
