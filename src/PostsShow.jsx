export function PostsShow(props) {
  return (
    <div>
      <p>If done right, this is coming from PostsShow!! yay</p>
        <p>{props.post.title}</p>
        <p>{props.post.image}</p>
        <p>{props.post.body}</p>
    </div>
  )
}