export function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cardIndex">
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <img src={post.image} />
          <p>
            {post.body}
          </p>
          <button className="button1" type="button">View Gameplay</button>
          <button onClick={props.onShowPost}> Show MODAL </button>
        </div>
      ))}
      </div>
    </div>
  );
}
