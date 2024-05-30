export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cardIndex">
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.id}</p>
          <p>{post.date}</p>
          <img src={post.image} />
          <p>
            {post.body}
          </p>
          <button className="button1" type="button">View Gameplay</button>
          <button onClick={() => {props.onShowPost(post)}}> Show MODAL INFO </button> {/* aha moment, here we have accessing each individual post here from the API. This is getting passed to CONTENT XXX*/}
        </div>
      ))}
      </div>
    </div>
  );
}
